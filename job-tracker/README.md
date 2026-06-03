# job-tracker

A minimalist, personal job-application tracker and assistant.

It is built around one idea: **keep the data dead-simple and let an AI agent do the heavy
lifting.** A Google Sheet is the single source of truth. A lightweight dashboard (a route inside
an existing portfolio site) makes it pleasant to browse — and to do quick edits — on any device.
An AI agent (Claude, run locally) handles the messy work of parsing job posts and updating rows.

## Status

**Phase: built & live.** The Google Sheet + schema, Claude's write tooling, and the `/tracker`
dashboard (read + light non-destructive writes) are all live. This folder holds the product
thinking (`docs/`) and the live operator tooling (`tooling/`).

## Documents

Read in order:

1. [`docs/00-philosophy.md`](docs/00-philosophy.md) — the principles that shape every decision.
2. [`docs/01-overview.md`](docs/01-overview.md) — what we're building, for whom, and the system at a glance.
3. [`docs/02-architecture.md`](docs/02-architecture.md) — the three layers and where each one plugs into the existing portfolio + Google stack.

To **operate the sheet** (add/enrich jobs, manage structure), start at [`tooling/README.md`](tooling/README.md).

## What's built

Everything except the optional backup. The operator manual for any agent maintaining the sheet is
[`tooling/README.md`](tooling/README.md).

- ✅ **Data schema** — `Applications` / `Details` / `Contacts`, linked by `id`. See `tooling/SCHEMA.md`.
- ✅ **Write tooling** — service-account access, API recipes, `reformat`/`verify` scripts, two
  bound Apps Scripts (`onEdit` auto-stamp + a `doPost` Web App). See `tooling/`.
- ✅ **Dashboard** — the `/tracker` route in the portfolio: reads the published CSV, and does light
  non-destructive writes (add / status / priority / notes) via the Web App. See `docs/03`, `docs/04`.
- ⏳ **Backup sheet** — a simple on-demand mirror. Deferred.
