// Map raw CSV rows (keyed by header name) → typed model, and join the two tabs by id.
// This is the ONE place that references sheet column names — a schema rename changes only here.

import type { Application, Details, JoinedApp } from '../types';
import { normalizeDate } from './dates';
import type { RawTabs } from './fetchTabs';

type Row = Record<string, string>;

const toApplication = (r: Row): Application => ({
  id: r['id'] ?? '',
  company: r['Company'] ?? '',
  status: r['Status'] ?? '',
  priority: r['Priority'] ?? '',
  quality: r['Quality'] ?? '',
  link: r['Link'] ?? '',
  dateAdded: normalizeDate(r['Date Added'] ?? ''),
});

const toDetails = (r: Row): Details => ({
  id: r['id'] ?? '',
  minYoe: r['Min YOE'] ?? '',
  dateApplied: normalizeDate(r['Date Applied'] ?? ''),
  lastUpdate: normalizeDate(r['Last Update'] ?? ''),
  myNotes: r['My Notes'] ?? '',
});

// A row is real iff its key column is non-empty.
const has = (r: Row, key: string) => (r[key] ?? '').trim().length > 0;

export function buildModel(raw: RawTabs): JoinedApp[] {
  const detailsById = new Map<string, Details>();
  raw.details.filter((r) => has(r, 'id')).forEach((r) => detailsById.set(r['id'].trim(), toDetails(r)));

  return raw.applications
    .filter((r) => has(r, 'Company') || has(r, 'id'))
    .map(toApplication)
    .map((a) => ({
      ...a,
      details: detailsById.get(a.id),
    }));
}
