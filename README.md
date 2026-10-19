# Beaufort Flock Files

A citable public-records archive on the **City of Beaufort (SC) Police Department's Flock Safety** surveillance
program, built from FOIA request **26-392**.

**Live site:** https://drthunter.github.io/beaufort-county-flock-files/

The site leads with the October 27 ask and the red flags, then gives a narrative summary in which every citation
opens the source PDF at the cited page, followed by the money table, a timeline, a searchable document library, and
the next public-records requests.

> Town of Bluffton PD records (FOIA 20394, FOIA 20363, LECAC) live separately at
> [DrTHunter/bluffton-flock-files](https://github.com/DrTHunter/bluffton-flock-files).

## Layout

```
index.html                 the website (static; no build step)
assets/                    style.css, app.js
data/26-392.js             curated documents, findings, narrative, the ask, money, requests
data/26-392-text.js        generated per-page text index (scripts/build_text_index.py)
requests/26-392/
  original-release.zip     the release exactly as received
  documents/               each PDF, renamed NN_YYYY-MM-DD_description.pdf (unaltered bytes)
  text/                    pdftotext output, or hand transcriptions of scans (#09-#11)
  SHA256SUMS               integrity hashes
  README.md                manifest: original filename -> archive filename
scripts/build_text_index.py
```

## Key findings (details and citations on the site)

- **The audit.** The City's only audit of a roughly $114,000 program is three sentences, signed off "Noted."
- **The quote trail.** Flock quoted Beaufort from August 2023, a year before the first contract, then again in
  December 2024, July 2025 and September 2025. The City bought five of the seven solar video cameras last quoted.
- **Raven.** A half-mile audio sensor was quoted in August 2023 ($56,000/yr). No signed order shows a purchase.
- **Billing.** Two 2024 order forms route billing to a Town of Bluffton email address.
- **Renewals.** Four auto-renewing contract tracks; the Flex notice window closed around late July 2026.

## Updating

1. Add documents to `requests/26-392/documents/` (or a new `requests/<id>/`) and extract text to `text/`.
2. Edit `data/26-392.js`. Cite as `[[DOC:PAGE]]`.
3. Run `python scripts/build_text_index.py 26-392`.

## Standards

- Never alter source PDFs; hashes prove integrity.
- Every claim on the site cites a document and page.
- Absence from a release is reported as "not produced," not "does not exist."

## Local preview

```bash
python -m http.server 8000
```
