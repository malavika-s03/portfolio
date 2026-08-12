// Tracker settings — the one file to touch for URLs, thresholds, and visual treatment.
// (Field-name → model mapping lives in lib/join.ts; enum values come from the sheet.)

// Published-to-web base (Share → Publish to web → CSV). Keyless, CDN-cached ~5 min.
const PUB_BASE =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRM-7oA5rTplPZTD7QQWgnwSgAKXm8R6l0FJp6EOvmwwtTdVJ9eSGV0W7QD7tSG8riGDhnmwAkMqq0Z/pub';

export const TAB_GIDS = {
  applications: '0',
  details: '733619242',
} as const;

export const csvUrl = (gid: string): string =>
  `${PUB_BASE}?gid=${gid}&single=true&output=csv`;

// Edit-this link for the live sheet (used by "open row in Sheet").
export const SHEET_EDIT_URL =
  'https://docs.google.com/spreadsheets/d/1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns/edit';

// "Needs attention" thresholds (whole days). An active app goes stale after staleDays.
export const THRESHOLDS = {
  staleDays: 1, // Saved/Applied/Reached out/Responded with no movement this long → needs attention
  recentDays: 7, // "This week" window
};

// The strict Status enum — one source of truth (mirror of the sheet's dropdown). Reference these
// names everywhere instead of string literals. Visual treatment lives in tracker.css via [data-status].
// Pipeline: Saved -> Applied -> Reached out -> Responded -> Accepted / Rejected / No response.
export const STATUS = {
  SAVED: 'Saved',
  APPLIED: 'Applied',
  REACHED_OUT: 'Reached out',
  RESPONDED: 'Responded',
  ACCEPTED: 'Accepted',
  REJECTED: 'Rejected',
  NO_RESPONSE: 'No response',
} as const;

// Pipeline order (for chips/dropdowns) + which statuses are "closed" (never need attention).
export const STATUS_ORDER = [STATUS.SAVED, STATUS.APPLIED, STATUS.REACHED_OUT, STATUS.RESPONDED, STATUS.ACCEPTED, STATUS.REJECTED, STATUS.NO_RESPONSE];
export const CLOSED_STATUSES: string[] = [STATUS.ACCEPTED, STATUS.REJECTED, STATUS.NO_RESPONSE];
export const PRIORITY_RANK: Record<string, number> = { High: 0, Medium: 1, Low: 2 };
export const PRIORITY_OPTIONS = ['High', 'Medium', 'Low'];
export const QUALITY_RANK: Record<string, number> = { High: 0, Medium: 1, Low: 2 };
export const QUALITY_OPTIONS = ['High', 'Medium', 'Low'];

// Min YOE enum — mirror of the sheet's "Min YOE" dropdown (strict). '' = unset.
export const MIN_YOE_OPTIONS = ['0', '1', '2', '3', '3+'];

// ---- Writing from the UI (see job-tracker/docs/04-write-from-ui.md) ----
// Paste the Apps Script Web App /exec URL here to ENABLE the add/edit controls. Blank = read-only.
export const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwdETZLw4leTYnxqGYtCLoKs3vUqLKUDDQXzImGU47wQf-hO0UTVfKJmTzFFX_oowtf0A/exec';
export const WRITES_ENABLED = WEB_APP_URL.length > 0;
