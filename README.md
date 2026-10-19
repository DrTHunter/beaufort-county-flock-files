# Bluffton Flock Files

A citable public-records archive on the **Town of Bluffton (SC) Police Department's Flock Safety** surveillance
network: the Police Chief's Flock email folder (FOIA 20394, 1,167 emails), the FOIA 20363 camera-location list,
and the Law Enforcement Citizens Advisory Committee (LECAC) records.

**Live site:** https://drthunter.github.io/beaufort-county-flock-files/

Red flags come first, then a narrative summary in which every citation opens the source document at the cited page,
a timeline, a document library, and a searchable index of every email in the release.

> The City of Beaufort PD archive (FOIA 26-392) lives separately at
> [DrTHunter/flock-foia-archive](https://github.com/DrTHunter/flock-foia-archive).

## Layout

```
index.html                       the website (static; no build step)
assets/                          style.css, app.js
data/bluffton.js                 curated documents, findings, narrative, money, missing records
data/bluffton-files.js           generated: E#### id -> hosted file
data/bluffton-emails.js          generated: metadata for all 1,167 emails in FOIA 20394
data/bluffton-text.js            generated: per-page text index used by search and the text viewer
requests/bluffton/
  documents/                     BL01-BL05 (LECAC + FOIA 20363) and cited FOIA 20394 emails (E####)
  text/                          extracted text for every hosted document
  foia-20394-email-index.csv     full metadata index of the portfolio
  SHA256SUMS                     hashes of every hosted file and of the original 514 MB portfolio
scripts/build_text_index.py      rebuilds data/bluffton-text.js
```

## Sources

| ID | Source | Notes |
|---|---|---|
| BL01–BL04 | LECAC minutes (Feb 2024) and agendas (Nov 2024, Jan 2025, Mar 2025) | BL01 is a .docx |
| BL05 | FOIA 20363: Bluffton Flock Camera Locations (7/6/2026) | No letterhead; ReportLab metadata |
| E#### | FOIA 20394: Chief Babkiewicz's Flock folder, archived 7/27/2026 | #### = item number in the portfolio |

## Redaction policy

The release itself is public, but this site does not republish:
- **Credentials.** E0008 contained a plaintext shared password for the Town's camera system. It appears here only
  as a redacted transcription, and the original PDF (plus eight other emails that quote it) is not hosted.
- **Private individuals.** E0402 and E0473 name private landowners at camera sites. They appear as redacted
  transcriptions.
- **Officer roster.** The December 2024 user roster with officers' phone numbers is listed in the index but not hosted.

Public officials, Town staff and Flock employees are named in their official or contractual roles.

## Standards

- Hosted PDFs are byte-for-byte extractions from the release; hashes prove integrity.
- Every claim on the site cites a document and page.
- Absence from a release is reported as "not produced" or "not in these emails," not "does not exist."

## Local preview

```bash
python -m http.server 8000
```
