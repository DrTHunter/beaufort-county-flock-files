/*
 * Town of Bluffton Police Department / Flock Safety
 *
 * Sources:
 *   BL01–BL04  Law Enforcement Citizens Advisory Committee (LECAC) minutes and agendas
 *   BL05       FOIA 20363 response: camera locations
 *   E####      FOIA 20394: Chief Joseph Babkiewicz's Flock email folder (1,167 items, archived 2026-07-27).
 *              #### is the item number inside the original PDF portfolio.
 *
 * Citations: [[BL03:1]] or [[E0452:1]] → document : page.
 */
window.FOIA = window.FOIA || { requests: [] };

const E = (idx, date, title, summary, extra) => Object.assign({
  id: "E" + String(idx).padStart(4, "0"), date, type: "Email", title, summary, pages: 1
}, extra || {});

window.FOIA.requests.push({
  id: "bluffton",
  short: "Bluffton PD",
  agency: "Town of Bluffton Police Department (SC)",
  vendor: "Flock Group, Inc. (Flock Safety)",
  received: "2026-10-19",
  label: "FOIA 20394 · FOIA 20363 · LECAC records",
  base: "requests/bluffton/",
  headline: "How Bluffton built a 52-camera Flock network, in its own emails.",
  summary:
    "This archive follows Bluffton PD's Flock program from the first sales demo in April 2023 to July 2026. It draws on the Police Chief's Flock email folder (FOIA 20394, 1,167 emails), the citizen advisory committee's records, and FOIA 20363's camera-location list. The network grew to 29 plate readers and 23 live-video cameras, plus 98 existing town cameras streamed into Flock.",

  documents: [
    // ── Advisory committee + FOIA 20363 ──────────────────────────────────────
    { id: "BL01", date: "2024-02-08", type: "Minutes", pages: 1, file: "BL01_2024-02-08_lecac-minutes", ext: "docx",
      title: "LECAC Minutes: Chief describes a 'desire to obtain' Flock",
      original: "2. LE Advise mins Feb 24.docx",
      summary: "Chief Babkiewicz tells the citizen advisory committee the department 'desires' Flock cameras 'throughout the town.' By this date Flock had already demoed, mapped and priced a three-phase system and sent a sole-source letter. The only public comment praises HOA Flock cameras already running in Pine Ridge." },
    { id: "BL02", date: "2024-11-14", type: "Agenda", pages: 2, file: "BL02_2024-11-14_lecac-agenda",
      title: "LECAC Agenda: 'Review of New SOP for use of Flock Cameras'",
      original: "11-14-2024 LECAC Agenda.pdf",
      summary: "The committee 'reviews' the Flock policy two months after Council took up the contract and it was signed. It's the same day Bluffton's Flock account went live and the chief completed admin training." },
    { id: "BL03", date: "2025-01-09", type: "Agenda", pages: 2, file: "BL03_2025-01-09_lecac-agenda",
      title: "LECAC Agenda: Flock policy 'posted', cameras targeted for end of February",
      original: "01-09-2025 LECAC Agenda.pdf",
      summary: "Flock policy 'has been posted'; the department is 'working with CIP on abatement for locations of cameras' and hopes for cameras by end of February 2025." },
    { id: "BL04", date: "2025-03-13", type: "Agenda", pages: 2, file: "BL04_2025-03-13_lecac-agenda",
      title: "LECAC Agenda: 'Approval of Flock Camera System Audit'",
      original: "03-13-2025 LECAC Agenda.pdf",
      summary: "The chief asks the committee to approve a Flock 'audit' the day after he reports three newly installed cameras still hadn't produced a single alert. The agenda has no approval-of-minutes item." },
    { id: "BL05", date: "2026-07-06", type: "FOIA Response", pages: 2, file: "BL05_2026-07-06_foia-20363-camera-locations",
      title: "FOIA 20363: Bluffton Flock Camera Locations (50 sites)",
      original: "FOIA.20363.Bluffton_Flock_Camera_Locations.fulfillment.7.6.2026.pdf",
      summary: "A list of 50 locations, 'nearing completion.' The total matches the emails' June 2026 count of 29 plate readers and 23 PTZ cameras. The list includes a boat landing, a Kroger, the county recycling center and the Old Town/Promenade district. There's no letterhead, and the metadata says ReportLab with an anonymous author." },

    // ── FOIA 20394: the sale (2023 – Feb 2024) ───────────────────────────────
    E(445, "2023-04-12", "Flock's first quote after a demo, 'quoted high' for the budget",
      "Sales rep Taylor Ellison thanks the chief and staff for a demo and sends preliminary numbers so they can 'submit something for the budget.'"),
    E(421, "2023-07-18", "'If not, I can go ahead and send a contract over'",
      "Flock presses the department to identify utility poles for plate readers, or skip that step and receive a contract.", { pages: 2 }),
    E(82, "2024-01-24", "Flock sends its own sole-source letter and suggests a co-op workaround",
      "After a meeting, Flock sends a 'sole source letter for your procurement director.' If that doesn't suffice, it suggests buying through a sheriffs' association co-op: 'this is what Hilton Head Island did!' It also plans to review 'live video integrations' with town IT.", { pages: 3 }),
    E(85, "2024-01-30", "Chief sends Flock the list of every town public-safety camera",
      "The chief emails Flock 'a list of all Public Safety Cameras' (attachment not produced)."),
    E(451, "2024-01-30", "Three-phase quote: 29 plate readers, 22 live-video cameras, plus existing-camera integration",
      "Phase 1 covers 17 LPRs, 4 Condor live-video cameras and integration of the town's existing live video. Phase 2 adds 12 LPRs and Phase 3 adds 18 more Condors.", { pages: 2 }),
    E(452, "2024-02-01", "Chief budgets Phase 1 at $163,550 'for my council presentation'",
      "The chief works out Phase 1 at $89,050 in year one plus $74,500 a year, and asks how to present it to Council. This was a week before he told the advisory committee of a 'desire' to obtain Flock.", { pages: 2 }),

    // ── Procurement + approvals (May – Sep 2024) ─────────────────────────────
    E(264, "2024-05-14", "'Are we able to piggyback off of the VA contract as a SC agency?'",
      "The Town's compliance director asks whether Bluffton can buy Flock through a Virginia Sheriffs' Association contract.", { pages: 3 }),
    E(261, "2024-05-14", "Co-op contract not yet awarded; Flock still 'working on their bid'",
      "The NC Sheriffs' Association coordinator says the co-op can be used once awarded. Awards come June 20, and 'Flock Safety is working on their bid.'", { pages: 3 }),
    E(588, "2024-06-12", "SCDOT bars ALPRs over a SLED data complaint: 'so we must be creative'",
      "The chief tells staff SCDOT 'is not allowing any cameras or ALPR's' on its property 'due to the SLED complaint on their storage of data.' Cameras will need private property owners or utility poles instead.", { pages: 2 }),
    E(467, "2024-06-12", "Flock supplies a sample property permission letter",
      "Flock sends its template 'Property License Agreement' for putting cameras on private land."),
    E(405, "2024-06-27", "Contract sent via DocuSign, with a $14,000 discount 'if signed by the end of this week'",
      "Flock routes the contract for signature and offers a $14,000 discount for signing within days. The chief must click 'Approve' for each camera location. This was more than two months before Council voted.", { pages: 2 }),
    E(407, "2024-06-27", "Virginia Sheriffs' co-op: 'Membership or registration is not required'",
      "The co-op coordinator confirms Bluffton can buy through the Virginia program without joining.", { pages: 2 }),
    E(412, "2024-08-30", "'We are nearing the council date to approve Flock'",
      "Flock asks when to route the contract to the town manager for signature.", { pages: 2 }),
    E(410, "2024-08-30", "Council meeting is September 10",
      "The Town's compliance director tells Flock to send the contract any time after the 11th.", { pages: 2 }),
    E(417, "2024-09-09", "The day before Council, the chief asks for the camera location list",
      "'I don't believe I ever got that list… I am meeting with Council tomorrow night to get the contract for first phase approved.'", { pages: 2 }),
    E(327, "2024-09-11", "Flock follows up on the September 10 Council meeting",
      "Flock asks for the town manager's contact information to route the contract, and for the chief to approve the deployment plan.", { pages: 2 }),
    E(746, "2024-09-16", "Chief unsure who should sign; plan to bridge '128 camera streams'",
      "The chief isn't sure he's the right signer for the FlockOS Advanced statement of work. He asks IT whether the town's cameras can support 'bridging 128 camera streams' into Flock.", { pages: 2 }),
    E(750, "2024-09-16", "Flock: 'I have received the signed contract'",
      "Six days after the Council meeting, Flock confirms it has the signed contract and needs only the statement of work."),
    E(844, "2024-09-18", "Chief returns the signed statement of work",
      "The chief sends back the signed FlockOS Advanced statement of work."),
    E(425, "2024-09-27", "First Flock invoice (INV-47807)",
      "Flock billing sends its first invoice to the department (the amount isn't shown in the email)."),
    E(706, "2024-09-23", "Flock hands the chief another department's LPR policy",
      "The sales rep forwards Garner (NC) PD's plate-reader policy as a model."),
    E(337, "2024-09-23", "Some planned cameras are 'outside of your jurisdiction'",
      "Flock's deployment specialist asks which locations fall outside Bluffton's jurisdiction so she can find alternates.", { pages: 2 }),

    // ── Building on private land (Oct 2024 – Mar 2025) ───────────────────────
    E(402, "2024-10-05", "Phase 1 site list: churches, HOAs and private landowners (redacted)",
      "Flock's project manager lists each Phase 1 site and whose permission is needed: county, utility, Lowcountry Presbyterian Church, Sun City Hilton Head Community Association and several private landowners. Hosted as a redacted transcription because it names private individuals.",
      { pages: 2, ext: "txt" }),
    E(628, "2024-10-18", "Town drafts easements for 11 private property owners",
      "The Town adapts its lighting easement into a camera easement for '11 private property owners' and sends it to legal review.", { pages: 2 }),
    E(422, "2024-10-19", "Flock invites the chief to dinner at a Boston steakhouse",
      "During the IACP conference, Flock's rep reminds invitees of 'our dinner this evening at Davio's Northern Italian Steakhouse.'", { pages: 2 }),
    E(423, "2024-10-19", "Chief declines the Flock dinner",
      "The chief declines because of a family visit, adding 'hopefully see you tomorrow at the exhibit hall.'", { pages: 2 }),
    E(618, "2024-10-31", "Chief's pitch to landowners: cameras for 'tracking vehicles entering and exiting our town'",
      "The chief drafts the message the Town will send property owners asking to host Flock cameras.", { pages: 3 }),
    E(344, "2024-11-19", "'Town operated security cameras on private property is going to be a touchy issue'",
      "The Town's project manager asks Flock for clearer equipment photos, saying the blurry spec sheet 'doesn't convey transparency.'", { pages: 3 }),
    E(308, "2024-12-09", "A camera site sits on heirs' property 'in litigation'",
      "Camera #16's site is on land 'in litigation of heirs with no clear owner.' The alternatives are county land Flock says is too far from the road, or SCDOT right-of-way.", { pages: 2 }),
    E(469, "2024-12-30", "Installs on hold; Town 'will NOT engage on pole attachments'",
      "Flock recaps: locations await the chief's approval, installs are held until permits arrive, and the target is late February or early March.", { pages: 15 }),
    E(475, "2025-01-09", "Four cameras were installed without the Town's approval",
      "Cameras #01, #06, #07 and #12 'were already inadvertently installed.' Flock says the 'unapproved installation' won't trigger payments and that it will check 'the permit requirements were met prior to installation.'", { pages: 2 }),
    E(473, "2025-01-09", "Chief objects to a coverage gap: 'we will have no data to reference' (redacted)",
      "The chief worries a relocated camera leaves a 'blind spot' for vehicles turning off Bluffton Parkway. Hosted as a redacted transcription because the quoted thread names a private landowner.",
      { pages: 4, ext: "txt" }),
    E(349, "2025-03-12", "First cameras live, but 'we have yet to receive a hit'",
      "The chief reports cameras #12, #17 and #08 are installed and live but haven't produced an alert. The next day the advisory committee is asked to approve a Flock 'audit.'", { pages: 2 }),
    E(352, "2025-03-19", "Chief tests the system by hot-listing a police car",
      "'We put one of our vehicles into a hit list and drove through each camera.'", { pages: 4 }),

    // ── Opening the network (Nov 2024 – Feb 2025) ────────────────────────────
    E(48, "2024-11-14", "Bluffton's Flock account goes live",
      "Flock's account-activation email arrives on November 14, 2024, the same day the advisory committee 'reviewed' the Flock SOP."),
    E(50, "2024-11-14", "Admin training: Flock requests five HOAs' cameras for the chief and pushes Lowe's access",
      "Flock requests access to Pine Ridge, Villages at Palmetto Pointe, Habersham, Coosaw Point and Fripp Island HOA cameras 'on your behalf,' and sends a template for regional Lowe's camera access.", { pages: 2 }),
    E(54, "2024-11-14", "Chief: should every role get every network?",
      "The chief asks whether agencies give all users access to all shared networks.", { pages: 2 }),
    E(52, "2024-11-18", "Day one: admins can search 201 networks",
      "Three HOAs have shared their cameras. 'Admins has access to 201 networks.'", { pages: 4 }),
    E(49, "2024-11-18", "'I don't have an issue of giving all groups access to all the cameras'",
      "The chief tells Flock he's fine giving every user group access to every camera if that's what others do.", { pages: 4 }),
    E(53, "2024-11-18", "Flock expands investigator access to all networks",
      "Flock says admins and investigators 'typically' get all networks and updates the CID role.", { pages: 5 }),
    E(859, "2025-01-08", "Home Depot grants statewide camera access, with no action needed",
      "Flock arranges statewide search and hot-list access to Home Depot's Flock cameras. 'No further action is required from you.'", { pages: 2 }),
    E(794, "2025-01-16", "312 of 540+ shared networks enabled; turn on live-video permissions; get Lowe's",
      "Flock notes over 540 networks are shared with Bluffton and offers a 'mass update.' It also suggests enabling permissions to 'view, edit, download' live video and control PTZ cameras, and requesting Lowe's access.", { pages: 3 }),
    E(783, "2025-02-06", "Chief asks how to get alerts on vehicles entering private communities",
      "The chief asks for alerts 'for vehicles that go into our private communities that have Flock,' naming Palmetto Point, Pine Ridge and the Townes at Buckwalter."),
    E(779, "2025-02-07", "'Everything within the town of Bluffton'",
      "The chief asks for alerts from all private community cameras in town.", { pages: 3 }),
    E(782, "2025-02-07", "Flock turns on alerts from Sun City, Pine Ridge, Palmetto Pointe and Home Depot",
      "Flock enables alerts from those private networks and requests access to the Townes at Buckwalter.", { pages: 5 }),

    // ── Inside the Town's systems (Jan – Jun 2025) ───────────────────────────
    E(86, "2025-01-07", "Chief approves a Flock engineer's access to Bluffton's Flock system",
      "Flock asks to give its integrations manager a user account 'during the implementation period.' The chief replies 'Yes I am good with this' within minutes.", { pages: 2 }),
    E(165, "2025-01-07", "Implementation plan: SSO, school maps, a 128-channel gateway and a 'Bluffton PD Safe' recruitment site",
      "Flock's plan covers single sign-on, Town GIS layers, a 128-channel gateway to bring Town cameras into Flock, and a community website where residents can 'register or integrate their cameras' or buy one.", { pages: 3 }),
    E(109, "2025-01-15", "Flock-made 'Bluffton Safe' website, flyers and window decals",
      "Flock sends marketing materials and the refer.flocksafety.com/bluffton-safe site for approval."),
    E(125, "2025-01-23", "Chief asks for school blueprints in the Flock map",
      "'Blueprints of the schools like we did with the GIS Map.'", { pages: 2 }),
    E(127, "2025-01-24", "Town GIS sends parcels, addresses and school blueprint layers to Flock",
      "The Town's GIS manager shares feature services, including 'Schools and blueprint popups.'", { pages: 2 }),
    E(208, "2025-02-06", "Flock's rollout options for the recruitment site, from press release to targeted outreach",
      "Flock outlines four ways to promote the camera-recruitment website.", { pages: 2 }),
    E(514, "2025-02-20", "Gateway inside the Town network, with port-forwarding rules",
      "Flock asks Town IT to install its gateway 'into your network,' give Flock logins to the cameras, and create 'port forwarding rules.' The statement of work 'states 99 connections.'", { pages: 4 }),
    E(8, "2025-05-22", "Town IT emails Flock a shared camera login in plain text (redacted)",
      "IT sends the camera list with a shared viewing username and password for the Town's camera system in the body of the email. The credential is redacted here. The original PDF isn't hosted.",
      { pages: 5, ext: "txt" }),
    E(553, "2025-05-30", "98 Town cameras added to Flock",
      "'I've successfully added 98 cameras from the list Bob provided.' All are placed at the police department pending real coordinates.", { pages: 17 }),
    E(717, "2025-04-21", "Live video now streams to officers' phones",
      "Flock's mobile app can now show live camera streams, with picture-in-picture.", { pages: 2 }),
    E(209, "2025-06-03", "FlockOS Advanced integration closed out",
      "Flock sends the project closing document for the integrations."),

    // ── Phase 2/3 and money (Sep 2025 – Jun 2026) ────────────────────────────
    E(439, "2025-09-11", "Phase 2 'Additional Services Agreement' under the original terms",
      "Flock sends the Phase 2 order form: 'we are simply adding products to your existing account.'", { pages: 2 }),
    E(444, "2025-09-11", "'Getting the Town Manager to sign off'",
      "The chief says he's working on the town manager's signature. No Council vote is mentioned.", { pages: 2 }),
    E(435, "2025-09-11", "Phases 2 and 3 executed the same afternoon",
      "The compliance director returns the executed 'Phases 2 and 3' agreement hours after receiving it, as contract 2026-18.", { pages: 3 }),
    E(332, "2025-09-11", "Flock: purchases are tax-exempt as 'pre-written/canned' software",
      "Flock's billing team says the purchases count as tax-exempt software and labor.", { pages: 2 }),
    E(714, "2025-09-16", "SCDOT permission 'will not happen at this time'",
      "The chief refuses two May River Road sites unless they're solar and off SCDOT property.", { pages: 3 }),
    E(689, "2025-09-18", "Invoice INV-74486: $109,500", "Flock invoice dated 9/18/2025 for $109,500.", { type: "Invoice" }),
    E(690, "2026-01-02", "Invoice INV-83654: $67,000", "Flock invoice dated 1/2/2026 for $67,000.", { type: "Invoice" }),
    E(395, "2025-06-03", "Upsell: 'Add live video to your LPR for $500'",
      "Flock pitches adding a video camera to every plate reader for $500 a year.", { pages: 2 }),
    E(841, "2026-06-03", "Final count: 29 LPRs and 23 PTZs, one PTZ more than the contracts covered",
      "Flock tallies 16 LPRs + 4 PTZs (Phase 1) and 13 LPRs + 19 PTZs (Phase 2): 'an additional PTZ was added that was not included in the original contracts.' The Town wants another solar PTZ at the New River Linear Trail pier.", { pages: 5 }),

    // ── Oversight, influence and Flock's own notices ─────────────────────────
    E(403, "2025-04-07", "Flock asks the chief for a 'heartfelt' thank-you video",
      "A request for a short customer appreciation video for Flock's company event.", { pages: 2 }),
    E(363, "2025-07-11", "Two free conference tickets reserved for Bluffton PD",
      "'We have two free tickets reserved for your department' for Flock Forward in Atlanta.", { pages: 2 }),
    E(745, "2025-07-22", "Free Flock swag kit for National Night Out", "Flock offers free promotional swag to hand out."),
    E(727, "2025-10-28", "Flock tracks ROI metrics 'to ensure you are well prepared for any council meetings'",
      "Flock's success manager asks for success stories ('Flock leadership loves to hear about wins!') and pushes Lowe's access again.", { pages: 2 }),
    E(1120, "2025-12-08", "Flock responds to FOIA'd audit logs going public: redaction tools are coming",
      "Flock says it's building 'redaction capabilities' to limit audit-log exports in public-records responses, and suggests narrowing from Nationwide to Statewide lookup in the meantime.", { pages: 2, type: "Vendor notice" }),
    E(635, "2025-12-11", "Flock strips officer names and searched plates from network audit logs",
      "'Network Audit Logs will no longer include: Officer names, Specific plates searched, Vehicle fingerprint information.'", { pages: 3, type: "Vendor notice" }),
    E(843, "2025-12-19", "'Despite organized opposition… law enforcement prevailed'",
      "Flock celebrates council wins in San Diego and Oakland, announces a 'Federal Opt-In capability,' and praises a ruling exempting LPR data from public records.", { pages: 3, type: "Vendor notice" }),
    E(1063, "2025-12-23", "Flock discloses Condor video units exposed online without a password",
      "Flock says the 'debug interface on a small number of Condor units was temporarily accessible on the internet without password protection,' and offers talking points for council members.", { pages: 2, type: "Vendor notice" }),
    E(496, "2026-01-08", "Flock asks for the data the department will present to its oversight committee",
      "'I understand you have a committee meeting tonight to discuss your Flock usage/audit. Are you willing to share a copy of the data…?'"),
    E(3, "2026-03-03", "Flock's 'Impact Census' feeds 'legislative advocacy that protects agency access to LPR'",
      "Flock asks agencies for outcome data it will use for marketing, renewals and policy advocacy.", { pages: 2, type: "Vendor notice" }),
    E(1062, "2026-03-23", "Federal sharing: agencies that opt in 'may receive a data sharing request from the FBI'",
      "Flock explains its federal opt-in. It's off by default, and opted-in agencies may get FBI requests within days.", { pages: 4, type: "Vendor notice" })
  ].map(d => {
    // E-series files are generated into data/bluffton-files.js (id -> file, ext, pages)
    const f = d.id[0] === "E" && (window.BLUFFTON_FILES || {})[d.id];
    if (!f) return d;
    return Object.assign(d, { file: f.file, ext: f.ext || undefined, pages: f.pages,
      original: "FOIA 20394 portfolio item #" + parseInt(d.id.slice(1), 10) + (f.ext ? " (redacted transcription)" : "") });
  }),

  findings: [
    {
      severity: "critical",
      title: "The advisory committee heard about a 'desire' after Flock had already priced the deal, and reviewed the policy after it was bought",
      body: "Flock demoed and quoted Bluffton in April 2023 [[E0445:1]]. By January 2024 it had sent a <b>sole-source letter</b> and a three-phase quote for 29 plate readers and 22 live-video cameras [[E0082:1]] [[E0451:1]], and the chief was budgeting $163,550 'for my council presentation' [[E0452:1]]. One week later he told the citizen advisory committee only of the department's '<b>desire</b> to obtain' Flock [[BL01:1]]. Council took up Phase 1 on September 10, 2024 [[E0417:1]] [[E0327:1]], and Flock had the signed contract by September 16 [[E0750:1]]. The committee's 'review' of the Flock policy came on November 14, 2024 [[BL02:1]], the same day the Flock account went live [[E0048:1]] and admin training opened access to outside networks [[E0050:1]]. Flock even supplied another department's policy as a model [[E0706:1]].",
      ask: "Request the Sept 10, 2024 Council agenda packet and minutes, the staff report, and the SOP drafts with any Flock-supplied language."
    },
    {
      severity: "critical",
      title: "Bluffton's searches reach 540+ outside networks, private HOAs, Home Depot and Lowe's",
      body: "On day one, admins could search <b>201 networks</b> [[E0052:1]], and the chief told Flock 'I don't have an issue of giving all groups access to all the cameras' [[E0049:1]] [[E0053:1]]. Two months later, more than <b>540 networks</b> had been shared with Bluffton [[E0794:1]]. Flock requested five HOAs' cameras 'on your behalf' [[E0050:1]], arranged statewide Home Depot access with 'no further action' needed [[E0859:1]], and kept pushing Lowe's access [[E0794:1]] [[E0727:1]]. The chief then asked for alerts on 'vehicles that go into our <b>private communities</b>' [[E0783:1]] [[E0779:1]]. Flock switched on alerts from Sun City, Pine Ridge, Palmetto Pointe and Home Depot [[E0782:1]].",
      ask: "Request the current list of every network Bluffton can search and every agency that can search Bluffton, plus all private and HOA sharing agreements."
    },
    {
      severity: "critical",
      title: "98 Town cameras were wired into Flock, and a shared password was emailed in plain text",
      body: "Flock's gateway went 'into your network,' with camera logins and '<b>port forwarding rules</b>' [[E0514:1]], to stream the Town's existing cameras into Flock. The chief had first floated 'bridging 128 camera streams' [[E0746:1]]. Town IT then emailed Flock a shared viewing username and password for the camera system <b>in plain text</b> [[E0008:1]] (redacted here). The next week Flock reported '98 cameras' added [[E0553:1]]. Live streams now reach officers' phones [[E0717:1]].",
      ask: "Has the Town rotated that credential? Request any security review of the Flock gateway, its firewall/port-forwarding configuration, and the list of Town cameras streamed into Flock."
    },
    {
      severity: "critical",
      title: "An 'audit' was approved the day after the chief said new cameras hadn't produced a single alert",
      body: "Four cameras had gone up early, without approval [[E0475:1]]. On March 12, 2025, the chief reported three more 'live' cameras that hadn't 'receive[d] a hit' [[E0349:1]]. The next day the advisory committee was asked to approve a 'Flock Camera System Audit' [[BL04:1]]. A week later the chief tested the system by hot-listing a police car [[E0352:1]]. Flock later asked for a copy of the data the department planned to show its oversight committee [[E0496:1]]. Separately, it removed officer names and searched plates from network audit logs [[E0635:1]] and promised 'redaction capabilities' to narrow FOIA audit exports [[E1120:1]].",
      ask: "Request the March 2025 audit, the January 2026 committee presentation, and full organization audit logs (with officer names and stated reasons)."
    },
    {
      severity: "high",
      title: "Competitive bidding skipped: a vendor-written sole-source letter, an out-of-state co-op and a $14,000 deadline",
      body: "Flock wrote the 'sole source letter for your procurement director,' and offered a sheriffs' co-op as a fallback: 'this is what Hilton Head Island did!' [[E0082:1]]. The Town asked to 'piggyback off of the VA contract as a SC agency' [[E0264:1]], before Flock had even won that contract [[E0261:1]]. The co-op required no membership [[E0407:1]]. Flock then sent the contract via DocuSign with a '<b>$14,000 discount</b>' if signed 'by the end of this week,' more than two months before Council voted [[E0405:1]].",
      ask: "Request the sole-source justification, the procurement file for contract 2025-21, and whether anything was signed before the Sept 10, 2024 vote."
    },
    {
      severity: "high",
      title: "Barred from state roads over a SLED data complaint, cameras went onto church, HOA and private land",
      body: "SCDOT refused ALPRs on its right-of-way 'due to the <b>SLED Complaint</b> on their storage of data.' The chief's response was 'so we must be creative' [[E0588:1]]. Flock supplied a property-license template [[E0467:1]]. The Town drafted easements for '11 private property owners' [[E0628:1]], including a church and the Sun City HOA [[E0402:1]], and picked one site on heirs' land 'in litigation' [[E0308:1]]. Town staff warned that 'Town operated security cameras on private property is going to be a <b>touchy issue</b>' [[E0344:1]]. The chief's pitch to landowners described cameras for 'tracking vehicles entering and exiting our town' [[E0618:1]].",
      ask: "Request the SLED complaint and SCDOT's ALPR position, plus every executed camera easement and property license."
    },
    {
      severity: "high",
      title: "Cameras went up before the Town approved them",
      body: "In January 2025 the Town learned four cameras 'were already inadvertently installed' without notice to proceed. Flock promised the '<b>unapproved installation</b>' wouldn't trigger payments, and said it would check after the fact whether 'the permit requirements were met prior to installation' [[E0475:1]] [[E0794:1]]. Some planned sites were also 'outside of your jurisdiction' [[E0337:1]].",
      ask: "Request the encroachment permits for cameras #01, #06, #07 and #12, with issue dates, and Flock's install records."
    },
    {
      severity: "high",
      title: "Phases 2 and 3 were signed by staff the afternoon they arrived, and the build ran past the contract",
      body: "Flock sent the Phase 2 order 'under the original terms' [[E0439:1]]. The chief went to the town manager [[E0444:1]], and the executed 'Phases 2 and 3' agreement went back the same afternoon [[E0435:1]]. No Council vote appears in the emails. Invoices of <b>$109,500</b> [[E0689:1]] and <b>$67,000</b> [[E0690:1]] followed. By June 2026 the build stood at 29 plate readers and 23 live-video PTZs, with 'an additional PTZ… not included in the original contracts' and another requested for a public trail pier [[E0841:1]].",
      ask: "Was Phase 2/3 (contract 2026-18) approved by Council or only budgeted? Request all invoices, payments and the full executed agreement."
    },
    {
      severity: "medium",
      title: "Flock got inside: vendor engineer access, school blueprints and the Town's parcel data",
      body: "The chief approved a Flock engineer's user account on Bluffton's system within minutes [[E0086:1]]. At his request, Town GIS sent Flock parcels, addresses and '<b>Schools and blueprint popups</b>' [[E0125:1]] [[E0127:1]], so school floor plans now sit on a private vendor's map [[E0165:1]].",
      ask: "Request any data-processing agreement covering Town GIS and school floor plans hosted by Flock, and the list of non-Town users with access."
    },
    {
      severity: "medium",
      title: "A Flock-built 'Bluffton Safe' site recruits residents' cameras",
      body: "Flock built a Town-branded website where residents can 'register or integrate their cameras,' with 'purchase options' [[E0165:1]], plus flyers, business cards and window decals [[E0109:1]]. Rollout ideas ranged from a press release to officers handing out flyers [[E0208:1]].",
      ask: "How many private cameras have registered or integrated? Request the registration list (counts only) and terms."
    },
    {
      severity: "medium",
      title: "Perks, swag and vendor-coached council messaging",
      body: "Flock invited the chief to a steakhouse dinner in Boston (he declined) [[E0422:1]] [[E0423:1]], reserved 'two free tickets' to its conference [[E0363:1]], offered swag [[E0745:1]] and asked for a thank-you video [[E0403:1]]. It tracks ROI 'to ensure you are well prepared for any council meetings' [[E0727:1]], gathers agency data for 'legislative advocacy' [[E0003:1]], and supplies talking points to counter 'organized opposition' [[E0843:1]] [[E1063:1]].",
      ask: "Request any gift, travel or conference records involving Flock, and any Flock-drafted materials used in Council or public presentations."
    },
    {
      severity: "medium",
      title: "Flock disclosed Condor video cameras exposed online without a password; Bluffton runs 23 PTZs",
      body: "In December 2025 Flock admitted the 'debug interface on a small number of Condor units was temporarily accessible on the internet <b>without password protection</b>,' showing 'live or recorded video' [[E1063:1]]. Bluffton's live-video PTZs were quoted as Condor units [[E0451:1]] [[E0841:1]]. Flock also began offering a federal-sharing opt-in, under which agencies 'may receive a data sharing request from the FBI' [[E1062:1]].",
      ask: "Were any Bluffton Condor/PTZ units affected? Has Bluffton enabled federal discoverability or accepted any federal sharing request?"
    },
    {
      severity: "low",
      title: "The camera list and the minutes trail have gaps",
      body: "FOIA 20363's 50 sites match the emails' count of 29 plate readers and 23 PTZs [[BL05:1]] [[E0841:1]]. But the list repeats entries (#7/#32 and #17/#44) and has no letterhead [[BL05:1]] [[BL05:2]]. On the minutes side, the March 13, 2025 agenda has no approval-of-minutes item [[BL04:1]], and only one set of minutes was produced [[BL01:1]].",
      ask: "Request the native camera inventory with coordinates, and LECAC minutes for Nov 2024, Mar 2025 and Jan 2026."
    }
  ],

  narrative: [
    { heading: "The sale (April 2023 – February 2024)",
      text: "Flock demoed for Bluffton PD in April 2023 and sent a quote 'in case you needed to submit something for the budget' [[E0445:1]]. By January 2024 it had mapped the town, written a sole-source letter, and quoted three phases: 29 plate readers, 22 live-video cameras, and integration of the Town's existing cameras [[E0082:1]] [[E0451:1]]. The chief was budgeting Phase 1 at $163,550 for Council [[E0452:1]]. A week later the citizen advisory committee heard only of a 'desire' to obtain Flock [[BL01:1]]." },
    { heading: "Getting it approved (May – September 2024)",
      text: "Rather than bid it out, the Town looked to piggyback on a Virginia sheriffs' co-op Flock hadn't yet won [[E0264:1]] [[E0261:1]]. Flock pushed a $14,000 'sign by Friday' discount in June [[E0405:1]]. When SCDOT barred ALPRs over a SLED data complaint, the plan became 'be creative' [[E0588:1]]. The night before Council voted on September 10, the chief still didn't have the location list [[E0417:1]]. Flock had the signed contract by September 16 [[E0750:1]], and the chief signed the statement of work for bridging the Town's cameras [[E0746:1]] [[E0844:1]]." },
    { heading: "Building it (October 2024 – March 2025)",
      text: "Town staff drafted easements for 11 private landowners, including a church and an HOA [[E0628:1]] [[E0402:1]], and warned the arrangement was 'a touchy issue' [[E0344:1]]. Four cameras went up early without approval [[E0475:1]]. The first approved cameras went live in March. The day after the chief reported no alerts yet, the advisory committee was asked to approve a Flock 'audit' [[E0349:1]] [[BL04:1]]." },
    { heading: "Opening the network (November 2024 – February 2025)",
      text: "Account activation and admin training landed the same day the committee 'reviewed' the policy [[E0048:1]] [[BL02:1]]. Admins could search 201 networks at once, and later 540+ [[E0052:1]] [[E0794:1]]. The chief was fine with 'all groups' getting 'all the cameras' [[E0049:1]]. Flock added HOAs, Home Depot statewide, and alerts on vehicles entering private communities [[E0050:1]] [[E0859:1]] [[E0782:1]]." },
    { heading: "Inside the Town's systems (January – June 2025)",
      text: "A Flock engineer got a user account [[E0086:1]]. School blueprints and parcel data went into Flock's map [[E0127:1]]. A gateway with port forwarding brought 98 Town cameras into Flock [[E0514:1]] [[E0553:1]], after IT emailed a shared camera password in plain text [[E0008:1]]. Flock also built a 'Bluffton Safe' site to recruit residents' cameras [[E0109:1]]." },
    { heading: "Phases 2 and 3 (September 2025 – June 2026)",
      text: "The Phases 2–3 agreement was executed by staff the afternoon it arrived [[E0435:1]]. Invoices of $109,500 and $67,000 followed [[E0689:1]] [[E0690:1]]. By June 2026: 29 plate readers, 23 live-video PTZs (one more than contracted), and a request for another camera on a public trail pier [[E0841:1]]." },
    { heading: "Who's watching the watchers",
      text: "As public-records requests exposed Flock audit logs nationwide, Flock removed officer names and searched plates from network audit logs [[E0635:1]] and promised tools to redact FOIA exports [[E1120:1]]. It asked to see the data Bluffton would present to its own oversight committee [[E0496:1]], and it coaches agencies on what to tell councils [[E0727:1]] [[E1063:1]]. The only independent check in this record is the public. That's why these files exist." }
  ],

  stats: [
    ["52", "Flock cameras: 29 plate readers + 23 live-video PTZs"],
    ["98", "existing Town cameras streamed into Flock"],
    ["540+", "outside networks shared with Bluffton"],
    ["$176.5K", "in the two invoices whose amounts are shown"]
  ],

  money: [
    { item: "Phase 1 quote (Feb 2024): year 1", cite: "E0452:1", amount: 89050, note: "quote, plus $74,500/yr recurring" },
    { item: "Invoice INV-47807 (Sept 2024)", cite: "E0425:1", amount: null, note: "amount not shown in email" },
    { item: "Invoice INV-74486 (Sept 2025)", cite: "E0689:1", amount: 109500 },
    { item: "Invoice INV-83654 (Jan 2026)", cite: "E0690:1", amount: 67000 }
  ],

  missing: [
    "Sept 10, 2024 Town Council agenda packet, staff report and minutes (Phase 1)",
    "Any Council action on Phases 2–3 (contract 2026-18)",
    "Executed Phase 1 contract, statement of work, and all order forms",
    "Flock's sole-source letter and the Town's procurement justification",
    "Every Flock invoice and payment record",
    "The SLED complaint and SCDOT's ALPR/right-of-way position",
    "All executed camera easements and property licenses",
    "Encroachment permits for cameras #01, #06, #07 and #12, with issue dates",
    "FlockOS sharing settings: networks Bluffton searches and agencies that search Bluffton",
    "HOA/private camera sharing agreements (Pine Ridge, Palmetto Pointe, Sun City, Townes at Buckwalter, etc.)",
    "Organization audit logs with officer names and stated search reasons",
    "The March 2025 LECAC 'audit' and the January 2026 committee presentation",
    "Security review of the Flock gateway and confirmation the emailed credential was rotated",
    "Whether any Bluffton Condor/PTZ unit was affected by the December 2025 exposure",
    "Federal-sharing settings and any FBI or federal data-sharing requests",
    "'Bluffton Safe' private-camera registrations (counts) and terms",
    "LECAC minutes: Nov 14, 2024; Mar 13, 2025; Jan 8, 2026"
  ]
});
