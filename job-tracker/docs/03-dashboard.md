# 03 — Dashboard (`/tracker` route)

The frontend half of job-tracker — a standalone, lazy-loaded route in the portfolio that turns the
Google Sheet into an **attention router** for the job hunt (*what do I act on now?*). Mostly a
read view of the published CSV, plus a few non-destructive writes (see `04-write-from-ui.md`).

## Isolation (non-negotiable)

- All code lives in `src/pages/Tracker/`. Nothing else imports it.
- Loaded via `React.lazy()` → its own Vite chunk. **Visitors to any other page download zero
  tracker bytes** (no CSV fetch, no parse, no render).
- `/tracker` renders **outside** the portfolio shell (no Header, no Lenis `SmoothScroll`, no
  `PageTransition`) via a layout-route split in `App.tsx`.
- **Removal** = delete `src/pages/Tracker/` + the `lazy` import + the one `<Route path="/tracker">`
  line in `App.tsx`. Portfolio untouched.

## Data flow

```
fetch 2 published CSVs (parallel)  →  RFC-4180 parse → rows keyed by header NAME
  →  normalize + join (Details 1:1 by id)  =  the MODEL (facts)
  →  derive signals + pulse  (live, from model + today — NEVER cached)
  →  filter / search / sort in memory (useMemo)  →  render
```

- **Read endpoint:** publish-to-web CSV, keyless, CDN-cached ~5 min. The dashboard can NOT use the
  Sheets API (API key only reads link-public sheets; the service-account key must never ship to a
  browser). Published-CSV is the only safe browser read. See `tooling/ACCESS.md`.
- **Columns are mapped by header name**, never by position — so reordering the sheet doesn't affect
  the dashboard. Field-name strings live in `lib/join.ts`; a schema rename is a one-file change.
- **A row is real iff its key column is non-empty** (`Applications`→Company/id, `Details`→id).
  Enforced in `buildModel`.

## Caching

- **In-memory** model is the session source of truth; filter/search/sort never refetch.
- **`sessionStorage`** holds the parsed model + `fetchedAt`. On revisit we hydrate instantly (no
  spinner) then **revalidate in the background** (stale-while-revalidate), swapping when it lands.
  Skip revalidate if < 60s old. Manual ↻ forces a fetch. ~20 lines, no SWR/React-Query dependency.
- **Signals & pulse are derived live** every render (date-dependent) — never persisted.

## Derived signals — "Needs attention" (`THRESHOLDS.staleDays` in `config.ts`)

Flagged only when **priority is High/Medium** (Low never) **and** the app is in an active status
idle **> 1 day**. Each active status has its own clock:

| Status | Clock | Stale → |
|---|---|---|
| Saved | Date Added | "apply" |
| Applied | Date Applied | "reach out" |
| Reached out | Last Update | "follow up" |
| Responded | Last Update | "move forward" |

Closed statuses (Accepted / Rejected / No response) are never flagged.

## Styling — scoped CSS, NOT Tailwind (important)

The tracker uses its own stylesheet `tracker.css`, scoped under a `.jt` root class, imported by
`index.tsx` (so it code-splits into the lazy chunk — its own ~11 KB CSS file, loaded only on
`/tracker`, zero global footprint). **Do not use Tailwind utilities here.** The portfolio's global
`src/index.css` has an *unlayered* reset — `* { margin:0; padding:0 }` and `button { border:none }` —
and unlayered CSS beats Tailwind's `@layer utilities` regardless of specificity, so Tailwind
`p-*`/`m-*`/`border` get silently stripped (cards are `<button>`s → lost their borders). Scoped
class/attribute selectors (`.jt-card`, `[data-status="Applied"]`) sidestep this cleanly. Theme is a
soft-dark "command-center"; status/priority colors are data-attribute-driven in `tracker.css`.

## UI

- **Pulse** (two widgets): *Today* (`added · applied · updated`) and *Overall* (`need-attention ·
  active` + clickable status-count chips that filter).
- **Toolbar:** search + **All** · **Status ▾** · **Priority ▾** (multi-select facet dropdowns) ·
  **Needs attention** · **This week**, plus 3 sorts (newest [default] · attention-first · priority).
- **Card list:** compact cards encoding info visually (status color bar, priority dot, age,
  attention badge). Responsive grid; 1 col on mobile.
- **Detail panel:** slide-over (right on desktop, bottom sheet on mobile). Shows the `Details`
  fields; **Status & Priority are editable selects and Notes is an editable textarea** (the few
  write actions — see `04`); the job link + "open row in Sheet". (FAB ＋ opens an Add sheet.)

## Deliberately NOT doing (YAGNI)

No runtime dependency (inline parser; CSS transitions, not framer). No virtualization (revisit past
~few hundred rows). No global store / service worker / server.

## File map

```
src/pages/Tracker/
  index.tsx            page shell, selection state, layout, error boundary; imports tracker.css
  tracker.css          scoped dark theme (.jt) — see "Styling" above; do NOT use Tailwind here
  config.ts            pub URL + gids + thresholds + status order  (the settings file)
  types.ts             Application · Details · JoinedApp · Signal
  lib/  csv.ts · dates.ts · fetchTabs.ts · join.ts · signals.ts · cache.ts
  hooks/  useTrackerData.ts (fetch/cache/SWR) · useFilters.ts (filter/search/sort)
  components/  Pulse · Toolbar · AppCard · AppList · DetailPanel · ErrorBoundary · states
```
