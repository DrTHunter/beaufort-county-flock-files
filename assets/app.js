(function () {
  const requests = window.FOIA.requests;
  const connections = window.FOIA.connections || [];
  const texts = window.FOIA_TEXT || {};
  const byId = Object.fromEntries(requests.map(r => [r.id, r]));
  const $ = sel => document.querySelector(sel);
  const SEV = ["critical", "high", "medium", "low"];
  const money = n => (n < 0 ? "−$" : "$") + Math.abs(n).toLocaleString("en-US");
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const docOf = (reqId, docId) => byId[reqId] && byId[reqId].documents.find(d => d.id === docId);
  const fileUrl = (r, d, page) => `${r.base}documents/${d.file}.${d.ext || "pdf"}${page && !d.ext ? "#page=" + page : ""}`;

  let req = requests[0];

  // [[03:13]] cites the current request; [[bluffton/BL02:1]] cites another one (shown as a cross-reference).
  const CITE_RE = /\[\[(?:([\w-]+)\/)?([A-Z]*\d+):(\d+)\]\]/g;
  const cite = (reqId, docId, page) => {
    const r = byId[reqId], d = docOf(reqId, docId);
    if (!d) return `<span class="cite">[missing ${reqId}/${docId}]</span>`;
    const x = reqId !== req.id;
    return `<a class="cite${x ? " xref" : ""}" href="${fileUrl(r, d, page)}" data-req="${reqId}" data-doc="${docId}" data-page="${page}" title="${esc(r.short)}: ${esc(d.title)}, page ${page}">${x ? esc(r.short) + " " : ""}#${docId} p.${page}</a>`;
  };
  const linkify = (html, home) => html.replace(CITE_RE, (_, r, id, p) => cite(r || home, id, p));

  const flagCard = (f, home) => `<article class="flag s-${f.severity}">
      <span class="sev">${f.severity}</span>
      <h3>${f.title}</h3>
      <p>${linkify(f.body, home)}</p>
      <p class="ask"><b>Follow-up:</b> ${f.ask}</p>
    </article>`;

  // Jurisdiction tabs
  $("#juris").innerHTML = requests.map(r =>
    `<button role="tab" data-req="${r.id}">${esc(r.short)}<small>${esc(r.label)}</small></button>`).join("");
  $("#juris").addEventListener("click", e => {
    const b = e.target.closest("button[data-req]");
    if (b) select(b.dataset.req, true);
  });

  // Connections (shared across tabs; citations carry their own request prefix)
  const renderConnections = () => {
    $("#conn-list").innerHTML = connections.map(f => flagCard(f, req.id)).join("");
  };

  // Red flags
  let sevFilter = "all";
  const renderFlags = () => {
    $("#flag-list").innerHTML = req.findings
      .filter(f => sevFilter === "all" || f.severity === sevFilter)
      .sort((a, b) => SEV.indexOf(a.severity) - SEV.indexOf(b.severity))
      .map(f => flagCard(f, req.id)).join("");
  };
  $("#sev-filter").addEventListener("click", e => {
    const b = e.target.closest("[data-sev]");
    if (!b) return;
    sevFilter = b.dataset.sev;
    document.querySelectorAll("#sev-filter .chip").forEach(c => c.setAttribute("aria-pressed", c === b));
    renderFlags();
  });

  // Document library
  let typeFilter = "All";
  $("#type-filter").addEventListener("click", e => {
    const b = e.target.closest("[data-type]");
    if (!b) return;
    typeFilter = b.dataset.type;
    document.querySelectorAll("#type-filter .chip").forEach(c => c.setAttribute("aria-pressed", c === b));
    renderDocs();
  });
  const searchHits = (d, q) => {
    const hits = [];
    ((texts[req.id] || {})[d.id] || []).forEach((txt, i) => {
      const idx = txt.toLowerCase().indexOf(q);
      if (idx >= 0) hits.push({ page: i + 1, snippet: txt.slice(Math.max(0, idx - 70), idx + q.length + 90) });
    });
    return hits;
  };
  const flagsByDoc = () => {
    const out = {};
    const scan = (f, home) => {
      for (const m of f.body.matchAll(CITE_RE)) {
        if ((m[1] || home) !== req.id) continue;
        (out[m[2]] = out[m[2]] || new Set()).add(f.severity);
      }
    };
    req.findings.forEach(f => scan(f, req.id));
    connections.forEach(f => scan(f, req.id));
    return out;
  };
  const renderDocs = () => {
    const q = $("#doc-search").value.trim().toLowerCase();
    const flagged = flagsByDoc();
    let shown = 0;
    $("#doc-grid").innerHTML = req.documents.filter(d => typeFilter === "All" || d.type === typeFilter).map(d => {
      const meta = (d.title + " " + d.summary + " " + d.original).toLowerCase();
      const hits = q ? searchHits(d, q) : [];
      if (q && !meta.includes(q) && !hits.length) return "";
      shown++;
      const sevs = flagged[d.id] ? SEV.filter(s => flagged[d.id].has(s)) : [];
      const rx = q && new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig");
      const hitHtml = hits.slice(0, 2).map(h =>
        `<div class="hit">…${esc(h.snippet.replace(/\s+/g, " ")).replace(rx, m => `<mark>${m}</mark>`)}… ${cite(req.id, d.id, h.page)}</div>`).join("")
        + (hits.length > 2 ? `<div class="muted" style="font-size:12px">+${hits.length - 2} more pages match</div>` : "");
      const fmt = (d.ext || "pdf").toUpperCase();
      return `<article class="doc">
        <div class="doc-meta"><span class="doc-id">#${d.id}</span><span>${d.date}</span><span class="tag">${d.type}</span><span>${d.pages} pp</span>${d.scanned ? '<span class="tag">scan · transcribed</span>' : ""}${d.ext ? `<span class="tag">${fmt}</span>` : ""}</div>
        <h3>${d.title}</h3>
        <p>${d.summary}</p>
        ${hitHtml}
        ${sevs.length ? `<div class="flags-on-doc">Cited in ${sevs.join(" / ")} red flags</div>` : ""}
        <div class="doc-actions">
          <button class="btn" data-req="${req.id}" data-doc="${d.id}" data-page="1">View</button>
          <a class="btn ghost" href="${fileUrl(req, d)}" download>Download ${fmt}</a>
        </div>
        <div class="muted" style="font-size:12px">Original filename: ${esc(d.original)}</div>
      </article>`;
    }).join("");
    $("#search-status").textContent = q ? `${shown} document${shown === 1 ? "" : "s"} match “${$("#doc-search").value.trim()}”` : "";
  };
  $("#doc-search").addEventListener("input", renderDocs);

  const fmtDate = s => new Date(s + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  // Render one jurisdiction
  function select(id, push) {
    req = byId[id] || requests[0];
    if (push) {
      const u = new URL(location.href);
      u.searchParams.set("j", req.id);
      history.replaceState(null, "", u);
    }
    document.querySelectorAll("#juris button").forEach(b => b.setAttribute("aria-selected", b.dataset.req === req.id));
    $("#req-label").textContent = `${req.label} · ${req.agency} · received ${req.received}`;
    $("#req-headline").textContent = req.headline;
    $("#req-summary").textContent = req.summary;
    const crit = req.findings.filter(f => f.severity === "critical" || f.severity === "high").length;
    const stats = [[crit, "critical / high red flags"], ...(req.stats || [])];
    $("#stats").innerHTML = stats.map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join("");

    renderConnections();

    sevFilter = "all";
    const counts = SEV.map(s => [s, req.findings.filter(f => f.severity === s).length]).filter(([, n]) => n);
    $("#sev-filter").innerHTML = [["all", req.findings.length], ...counts]
      .map(([s, n]) => `<button class="chip" data-sev="${s}" aria-pressed="${s === "all"}">${s} (${n})</button>`).join("");
    renderFlags();

    $("#narrative").innerHTML = req.narrative.map(n => `<h3>${n.heading}</h3><p>${linkify(n.text, req.id)}</p>`).join("");

    const hasMoney = req.money && req.money.length;
    $("#money").hidden = !hasMoney;
    document.querySelector('nav a[href="#money"]').hidden = !hasMoney;
    if (hasMoney) {
      const sum = k => req.money.reduce((s, m) => s + (m[k] || 0), 0);
      $("#money-table").innerHTML = `
        <thead><tr><th>Item</th><th class="num">Year 1</th><th class="num">Recurring / yr</th><th class="num">Initial term</th><th>Source</th></tr></thead>
        <tbody>${req.money.map(m => `<tr>
          <td>${m.item}${m.note ? `<small>${m.note}</small>` : ""}</td>
          <td class="num">${money(m.year1)}</td>
          <td class="num">${m.recurring == null ? "unstated" : money(m.recurring)}</td>
          <td class="num">${money(m.term)}</td>
          <td>${linkify(`[[${m.cite}]]`, req.id)}</td></tr>`).join("")}</tbody>
        <tfoot><tr><td>Total known</td><td class="num">${money(sum("year1"))}</td><td class="num">${money(sum("recurring"))} + ?</td><td class="num">${money(sum("term"))}</td><td></td></tr></tfoot>`;
    }

    const flagged = flagsByDoc();
    $("#tl").innerHTML = [...req.documents].sort((a, b) => a.date.localeCompare(b.date)).map(d => {
      const hot = flagged[d.id] && (flagged[d.id].has("critical") || flagged[d.id].has("high"));
      return `<li class="${hot ? "flagged" : ""}"><time>${fmtDate(d.date)}</time><br>
        <button data-req="${req.id}" data-doc="${d.id}" data-page="1"><span class="t-title">#${d.id} ${d.title}</span></button>
        <div class="muted">${d.summary}</div></li>`;
    }).join("");

    typeFilter = "All";
    $("#doc-search").value = "";
    $("#type-filter").innerHTML = ["All", ...new Set(req.documents.map(d => d.type))]
      .map(t => `<button class="chip" data-type="${t}" aria-pressed="${t === "All"}">${t}</button>`).join("");
    renderDocs();

    $("#missing").innerHTML = req.missing.map(m => `<li>${m}</li>`).join("");
  }

  // Viewer: anything with data-doc opens that document at data-page
  const dlg = $("#viewer"), frame = $("#v-frame"), pre = $("#v-text"), toggle = $("#v-toggle");
  let current = null;
  const showText = on => {
    pre.hidden = !on; frame.hidden = on;
    toggle.textContent = on ? "Show PDF" : "Show text";
  };
  const open = (reqId, docId, page) => {
    const r = byId[reqId], d = docOf(reqId, docId);
    if (!d) return;
    current = { d, page };
    $("#v-title").textContent = `${r.short} #${d.id} ${d.title}`;
    $("#v-page").textContent = `page ${page} of ${d.pages}`;
    $("#v-open").href = fileUrl(r, d, page);
    $("#v-open").textContent = d.ext ? `Download ${d.ext.toUpperCase()} ↓` : "Open PDF ↗";
    const pages = (texts[reqId] || {})[d.id] || [];
    pre.textContent = pages.length ? pages.map((t, i) => `──── page ${i + 1} ────\n${t}`).join("\n\n") : "No text available.";
    frame.src = "about:blank";
    if (d.ext) {
      // Non-PDF originals (e.g. .docx) can't render in the browser: show the extracted text.
      toggle.hidden = true;
      showText(true);
    } else {
      toggle.hidden = false;
      showText(false);
      setTimeout(() => { frame.src = fileUrl(r, d, page); }, 30); // reload so a new #page is honored
    }
    if (!dlg.open) dlg.showModal();
  };
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-doc]");
    if (!el || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    open(el.dataset.req || req.id, el.dataset.doc, Number(el.dataset.page) || 1);
  });
  toggle.addEventListener("click", () => {
    showText(pre.hidden);
    if (!pre.hidden && current) {
      const m = [...pre.textContent.matchAll(/──── page (\d+) ────/g)].find(x => +x[1] === current.page);
      if (m) pre.scrollTop = (m.index / pre.textContent.length) * pre.scrollHeight;
    }
  });
  $("#v-close").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", () => { frame.src = "about:blank"; });

  select(new URLSearchParams(location.search).get("j") || requests[0].id, false);
})();
