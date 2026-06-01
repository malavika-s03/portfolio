// Date helpers. We normalize every sheet date to 'yyyy-mm-dd' and compare in UTC.

// Published CSV can emit dates as ISO, as a Google Sheets serial number (e.g. 46175), or as
// a locale string (6/2/2026) depending on the cell's format — normalize all three to 'yyyy-mm-dd'.
export function normalizeDate(value: string): string {
  const s = (value ?? '').trim();
  if (!s) return '';
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10); // already ISO
  if (/^\d+(\.\d+)?$/.test(s)) {
    const ms = Math.round((parseFloat(s) - 25569) * 86_400_000); // serial: days since 1899-12-30; 25569 = 1970-01-01
    return new Date(ms).toISOString().slice(0, 10);
  }
  const t = Date.parse(s); // e.g. "6/2/2026", "Jun 2, 2026"
  return Number.isNaN(t) ? s : new Date(t).toISOString().slice(0, 10);
}

export function todayStr(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function toUTC(iso: string): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return null;
  return Date.UTC(+m[1], +m[2] - 1, +m[3]);
}

// Whole days between `iso` and `today` (positive when `iso` is in the past). null if unparseable.
export function daysSince(iso: string, today: string): number | null {
  const a = toUTC(iso);
  const b = toUTC(today);
  if (a == null || b == null) return null;
  return Math.round((b - a) / 86_400_000);
}

// "5d", "today", "12d" — compact age label.
export function ageLabel(iso: string, today: string): string {
  const d = daysSince(iso, today);
  if (d == null) return '';
  if (d <= 0) return 'today';
  return `${d}d`;
}

// Local clock time 'HH:MM' for the freshness note.
export function clockTime(ms: number): string {
  const d = new Date(ms);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}
