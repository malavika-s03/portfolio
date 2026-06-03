# 01 — Overview

## What we're building

A personal job-application tracker that is **edited mostly by an AI agent and browsed through a
clean dashboard.** You capture raw inputs (a job URL, pasted text, an email); the agent turns
them into structured rows in a Google Sheet; a lightweight dashboard makes the pipeline easy to
read and search on any device.

It is a *working pipeline tool* — not an analytics product. The goal is to always know what's in
flight, what needs a follow-up, and to find any past application fast.

## Who it's for

- **Primary user (you):** works from the terminal, drives the agent to add and update entries.
- **Peer (non-technical):** no command line. Reads the dashboard on web/mobile, and can edit the
  Google Sheet directly if needed.
- **One shared list.** Both people work the same set of applications. Each row carries an
  `Added by` marker (Malavika / Abhijeet / other) so it's clear who added it.

## What it does (the jobs-to-be-done)

1. **Status & follow-ups** — see the whole pipeline by stage; surface what's awaiting a reply or
   has gone quiet, so nothing slips.
2. **Search & recall** — pull up any past role fast: the link, the description, the notes — by
   company, keyword, or date.
3. **Content help** — the agent acts on entries: summarise a job description from its link, draft
   a follow-up, tailor notes per role.

(Funnel/conversion analytics are explicitly *not* a priority — see "What it is not".)

## System at a glance

```
              [ Raw inputs ]  (job URLs, pasted text, emails)
                     │
                     ▼
        ┌─────────────────────────────┐
        │  AUTOMATION / WRITE LAYER   │   ← Claude, local + secure. Does the bulk:
        │  (details deferred)         │     parses inputs, enriches, cleans up,
        └──────────────┬──────────────┘     maintains extra detail tabs.
                       │ bulk writes
                       ▼
        ┌─────────────────────────────┐
        │        DATA LAYER           │   ← Google Sheet = single source of truth.
        │      [ Google Sheets ]      │     Humans also edit directly: status updates,
        └──────────────┬──────────────┘     dropping in a company name. Minimal effort.
                       ▲
                       └── humans (trivial edits, in the sheet)
                       │ published as CSV (keyless, CDN-cached)
                       ▼
        ┌─────────────────────────────┐
        │     PRESENTATION LAYER      │   ← dashboard route inside the existing portfolio.
        │  [ /tracker on portfolio ]  │     Reads the published CSV; also does light
        └─────────────────────────────┘     non-destructive writes via an Apps Script Web App.
```

The split that matters: the dashboard **reads** the published CSV, and for convenience does a few
**non-destructive writes** (add a listing, change status/priority, edit notes) through an Apps
Script Web App that runs as the owner — **no service-account key ever lives in the browser.** The
bulk of writing still happens on the data side: Claude from a trusted machine, humans in the sheet.
That credential isolation — public read path, owner-authorized write path, secret local key — is
the heart of the design. *(This evolved from the original strictly-read-only plan; see `docs/04`.)*

### Division of labor

- **Humans:** minimal-effort edits, straight in the sheet — update a status, add a company name
  and little else.
- **Claude:** the heavy lifting — pick up half-entered rows and complete them, parse raw
  links/text/emails into structured rows, clean and normalise data, and keep additional detail
  tabs in the same sheet for richer context the humans don't maintain by hand.

## What it is *not* (scope guardrails)

- **Not a full web app.** Writes are limited to a few non-destructive actions (add, status,
  priority, notes); no deletes, no login screens, no account system in the UI.
- **Not multi-account.** No user accounts or permissions system — access is "who has the sheet."
- **Not an analytics dashboard.** Light counters are fine; conversion-funnel reporting is out.
- **Not a new piece of infrastructure.** It rides the existing portfolio's build, domain, and
  deploy. No new server, database, or hosting.

## A note on privacy (a made decision, not a warning)

The dashboard reads from a *published* (publicly fetchable) Google Sheet, and it lives on the
public portfolio domain. This is an accepted trade-off: the data in this tracker is considered
low-sensitivity, so keeping the read path keyless and dead-simple is worth more than hiding it.
If that ever changes, the read path is the thing to revisit.
