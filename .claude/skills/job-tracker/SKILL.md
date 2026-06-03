---
name: job-tracker
description: Use when adding, updating, enriching, or researching job applications in the user's job-tracker Google Sheet, or maintaining its structure, statuses, notes, or the dashboard — any task that touches "the tracker" or "the job sheet".
---

# job-tracker

## Overview

A Google Sheet is the source of truth for the user's job-application tracker. Humans hand-edit
the `Applications` tab; you (Claude) do the bulk via the Sheets API from `job-tracker/tooling/`.
This skill **routes you to the operator docs** — it deliberately does not restate fields, columns,
or enum values, because those change. Read them live each time.

## When to use

- "Add this job / these jobs to the tracker" — from a link, pasted text, an email, or a bare company name
- "Enrich / research this application" — fill details, Glassdoor, job description, etc.
- "Update the status / priority", or edit an application's **notes**
- Change the sheet's structure (add a column or tab), run a backup, or check access

## How to operate

1. **Read `job-tracker/tooling/README.md` first** — the system map, key facts (live sheet id,
   auth), and the workflows. It links everything below.
2. For field/enum definitions, read **`SCHEMA.md`** (the fields) and **`CONVENTIONS.md`** (the
   rules: `id` logic, enums, safe-write). **These are the source of truth — never hardcode columns
   or enum values from memory or from this skill; they change.**
3. For exact API code, use the recipes in **`ACCESS.md`** (auth, add / patch / upsert, gotchas).
4. Read **live state via the Sheets API** before deciding writes (the published CSV lags 1–5 min),
   and set `id` + `Date Added` yourself on API writes — the sheet's `onEdit` script only fires for
   human edits, not the API.

Tools in `job-tracker/tooling/`: `verify.mjs` (access check) and `reformat.mjs` (re-apply
dropdowns/formats by header name — safe on live data). Two bound Apps Scripts:
`apps-script/Code.gs` (`onEdit` auto-stamp) and `apps-script/Api.gs`
(the dashboard's `doPost` Web App — re-deploy after edits). The dashboard frontend is in the portfolio
at `src/pages/Tracker/`.

## Don't

- Don't hardcode columns/enums from this skill — re-read `SCHEMA.md` / `CONVENTIONS.md` each time.
- Don't apply validation to whole columns, and don't add checkbox columns (both bloat the CSV).
- Don't judge a row "blank" by all-cells-empty — use its key column (see `CONVENTIONS.md`).
- Don't put credentials or write scripts anywhere but `job-tracker/tooling/` (`.env` is gitignored).
