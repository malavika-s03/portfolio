# 00 — Philosophy

The principles below are the *why* behind the whole system. Every later decision should be
traceable back to one of these. When a future choice is unclear, re-read this doc first.

## 1. Decouple the layers

Most trackers fuse data, UI, and write-logic into one full-stack app. We deliberately split
them into three independent layers — **Data**, **Presentation**, and **Automation/Write** —
that each do one thing and talk through simple, well-understood interfaces. Any layer can be
swapped or rebuilt without touching the others.

## 2. Near-zero backend

There is no server to run, no database to administer, no auth system to maintain. The "backend"
is a Google Sheet. This removes an entire category of work (hosting, scaling, migrations,
uptime) that a personal tracker simply does not justify.

## 3. Separate the read path from the write path

Reads and writes have completely different needs, so they get completely different lanes:

- **Reads are keyless and public.** The dashboard fetches data through Google's published-CSV
  endpoint — a plain `fetch()` with no login, no API key, no quota. Fast and trivial.
- **Writes happen in the sheet, by people and by Claude.** Humans edit the sheet directly for
  small things; Claude does the bulk of the writing from a trusted local machine, using
  credentials that never leave that machine and never touch the frontend.

This split is the core architectural move. It means the public-facing dashboard can never write,
and the writing always happens on the data side (the sheet), never through the public surface.

## 4. Bulletproof simplicity over features

When two designs both work, choose the one with fewer moving parts. A read-only dashboard
beats a read-write one because it deletes form handling, validation, write-error states, and
sync logic. Features earn their place by clearly justifying their complexity.

## 5. Reuse what already exists

This system plugs into infrastructure that's already deployed (a portfolio site, its build, its
domain, its deploy pipeline) rather than standing up anything new. The cost of adding the tracker
should be measured in *a new route*, not *a new project*.

## 6. Humans curate lightly; Claude does the heavy lifting

The work is split by effort, not by ownership — both edit the same sheet, but they do different
kinds of edits:

- **Humans do the trivial, minimal-effort things:** update a status, or just drop in a company
  name with nothing else filled in. The bar for a human edit is "as little as possible."
- **Claude does the bulk:** take a half-entered row or a raw link/description, parse it, and fill
  in the rest. Clean up and normalise data. Maintain additional tabs in the same sheet that hold
  richer detail and views the humans don't need to touch by hand.

The typical loop: a human adds the bare minimum, and Claude is smart enough to pick it up later
and complete it. The point of involving Claude is to remove tedious data entry — the human
should never have to type what the agent can infer.

## 7. Client-side speed

The dashboard loads the entire dataset once and then does all filtering, searching, and grouping
in the browser's memory. No round-trips per interaction. For a dataset this size, everything
feels instant.
