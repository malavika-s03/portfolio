// Tracker settings — the one file to touch for URLs, thresholds, and visual treatment.
// (Field-name → model mapping lives in lib/join.ts; enum values come from the sheet.)

// Published-to-web base (Share → Publish to web → CSV). Keyless, CDN-cached ~5 min.
const PUB_BASE =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRM-7oA5rTplPZTD7QQWgnwSgAKXm8R6l0FJp6EOvmwwtTdVJ9eSGV0W7QD7tSG8riGDhnmwAkMqq0Z/pub';

export const TAB_GIDS = {
  applications: '0',
  details: '733619242',
  contacts: '876919554',
} as const;

export const csvUrl = (gid: string): string =>
  `${PUB_BASE}?gid=${gid}&single=true&output=csv`;

// Edit-this link for the live sheet (used by "open row in Sheet").
export const SHEET_EDIT_URL =
  'https://docs.google.com/spreadsheets/d/1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns/edit';

// "Needs attention" thresholds (whole days). Tune freely — each maps to one rule in lib/signals.ts.
export const THRESHOLDS = {
  staleAppliedDays: 5,
  agingSavedDays: 7,
  inProgressDays: 3, // "In progress" with no movement this long → it has pending work, nudge it
  recentDays: 7, // "This week" window
};

// The strict Status enum — one source of truth (mirror of the sheet's dropdown). Reference these
// names everywhere instead of string literals. Visual treatment lives in tracker.css via [data-status].
// "In progress" = started but has a pending task (e.g. still need to mail) — between Saved and Applied.
export const STATUS = {
  SAVED: 'Saved',
  IN_PROGRESS: 'In progress',
  APPLIED: 'Applied',
  SCREENING: 'Screening',
  REJECTED: 'Rejected',
  NO_RESPONSE: 'No-response',
} as const;

// Pipeline order (for chips/dropdowns) + which statuses are "closed" (not active).
export const STATUS_ORDER = [STATUS.SAVED, STATUS.IN_PROGRESS, STATUS.APPLIED, STATUS.SCREENING, STATUS.REJECTED, STATUS.NO_RESPONSE];
export const CLOSED_STATUSES: string[] = [STATUS.REJECTED, STATUS.NO_RESPONSE];
export const PRIORITY_RANK: Record<string, number> = { High: 0, Medium: 1, Low: 2 };
