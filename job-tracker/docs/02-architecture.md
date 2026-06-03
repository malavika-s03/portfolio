# 02 — Architecture

This doc describes the three layers and, importantly, **where each one plugs into the setup that
already exists.** It stays high-level. Implementation specifics (especially for the write layer)
are deferred by design.

---

## Layer 1 — Data (Google Sheets)

The single source of truth is one Google Sheet.

- **Tabs grow over time.** We start with the core **Jobs** tab and add others (e.g. Interviews,
  Contacts, To-Dos) only when they earn their place. Relationships between tabs are kept by
  simple shared IDs.
- **Sharing:** the sheet is shared with both people as editors, so the peer can read the
  dashboard *and* edit the sheet directly when needed.
- **Read interface — "Publish to web → CSV".** Each tab is published as a CSV endpoint. This is
  Google's CDN-cached, keyless, no-quota export. It is the *only* thing the dashboard talks to.

> **Why a sheet and not a database?** A spreadsheet is already a great editable UI, it's free,
> it has an excellent mobile app for the peer, and it needs zero administration. The published-CSV
> trick removes the usual downside (auth/quota on reads), which is what tipped the decision here.

> **Caching note:** the published CSV updates within roughly **1–5 minutes** of a change, not
> instantly. Acceptable for a tracker; worth remembering when a fresh write "isn't showing yet."

---

## Layer 2 — Presentation (a route inside the existing portfolio)

The dashboard is **not a new project.** It is a new route added to the already-deployed portfolio
site.

**What it plugs into (the existing stack):**

| Piece | Already there | How the tracker uses it |
|---|---|---|
| Framework | Vite + React 19 + TypeScript | New page component under the app's `pages/`. |
| Styling | Tailwind CSS v4 | Reuse existing tokens/components for a consistent look. |
| Routing | `react-router-dom` (BrowserRouter) | Add one `<Route>` for the tracker path. |
| Deep links | A `404.html` SPA-redirect fallback already exists | Refreshing/landing on the tracker route resolves correctly — no extra work. |
| Deploy | Build → publish to GitHub Pages (gh-pages) | The tracker route ships with the normal build/deploy. No new pipeline. |
| Domain | Custom domain already configured | The tracker is reachable at a path on that same domain. |

**How the page behaves:**

- On load, it `fetch()`es the published CSV(s), parses them in the browser (RFC-4180 parser, written
  inline — no new dependency), and holds the data in memory.
- All filtering, searching, and grouping happen client-side — instant, no further network calls.
- It does a few **non-destructive writes** — add a listing, change status/priority, edit notes —
  by POSTing to an **Apps Script Web App** (`tooling/apps-script/Api.gs`) that runs as the owner.
  No deletes; **no service-account key in the browser.** Writes show optimistically, then reconcile
  with the CSV. *(Originally planned strictly read-only; this is the one deliberate exception —
  see `04-write-from-ui.md`.)*

> **Why bolt onto the portfolio instead of a standalone app?** The infrastructure — build,
> domain, deploy, SPA routing — already exists and is maintained. Adding the tracker costs *one
> route*, not a new deployment target.

> **Boundary:** the portfolio repo gets the frontend only — its render code plus a thin client that
> POSTs to the Web App. **No service-account key, no secrets ever live in it.** The only thing
> shipped is the public Web App URL (an owner-authorized, append/edit-only endpoint). The
> service-account key and the bulk write tooling belong to Layer 3, which lives elsewhere.

### Isolation requirements (non-negotiable)

Even though the tracker shares the portfolio's repo and deploy, it must behave like a guest that
leaves no footprint. Two hard rules:

- **Code isolation.** All tracker code is self-contained (its own route, its own folder/module,
  its own dependency). It must not modify, reach into, or entangle the portfolio's existing
  components, state, or styling. Removing the tracker should be as clean as deleting its folder
  and one route line.
- **Zero performance impact on the portfolio.** The portfolio's load time and runtime must be
  unaffected by the tracker. The tracker's code (and its data fetching) should only ever run when
  someone is actually on the tracker route — never on the portfolio's main pages. The portfolio
  is the priority surface; the tracker must never tax it.

---

## Layer 3 — Automation / Write (local, agent-driven) — *high level only*

Writes come from **two sources, both landing in the same sheet**:

- **Humans, directly in the sheet** — small, low-effort edits: updating a status, dropping in a
  new company name. Uses Google's own editing/auth; nothing special needed.
- **Claude, running on a trusted local machine** — the bulk of the work: completing half-entered
  rows, parsing raw links/text/emails into structured rows, cleaning and normalising data, and
  maintaining additional detail tabs in the same sheet.

This Layer-3 doc concerns the **Claude (agent) side**, since the human side is just "edit the
sheet." At the level we've committed to so far:

- It lives in a **separate, private location** — *not* in the portfolio repo — so secrets and
  tooling are fully isolated from the public site.
- It authenticates to the sheet with **local-only credentials** (a service-account-style key that
  never leaves the machine and never appears in any frontend).
- It can do the full range of sheet operations programmatically: add and edit rows, and set up
  structure like typed columns and dropdowns. (Capability detail belongs in a later doc.)
- Its job is to turn **raw inputs → structured rows**: parse a job link/text/email, extract the
  fields, and file the entry. Plus targeted updates to existing rows.

> **Deliberately deferred:** the exact tooling, the command set, the auth mechanics, and a
> capability spike against a test sheet. These are likely to shift once we start building, so
> they get their own focused session and their own docs rather than being guessed at now.

---

## Data flow, end to end

**Write path (three ways into the same sheet):**
- *Human:* a quick edit straight in the sheet — set a status, add a bare company name.
- *Dashboard:* a few non-destructive edits (add / status / priority / notes) → POST to the Apps
  Script Web App (runs as owner) → writes the sheet. No key in the browser.
- *Claude:* raw input (or a half-entered human row) → agent parses, structures, enriches → writes
  via the service account (locally, securely). Claude picks up and completes what a human started.

**Read path:** Google republishes the CSV (within ~1–5 min) → dashboard `fetch()`es it on load →
parses to in-memory objects → user filters/searches/browses instantly.

The credentials stay isolated: the public read path is keyless, the dashboard's write path is an
owner-authorized Web App (no key shipped), and the service-account key never leaves the local
machine. That separation is the property the whole architecture is built to preserve.
