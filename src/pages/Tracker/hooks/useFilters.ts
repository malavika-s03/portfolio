import { useMemo, useState } from 'react';
import { PRIORITY_RANK, THRESHOLDS } from '../config';
import { daysSince } from '../lib/dates';
import type { DecoratedApp } from '../types';

export type SortKey = 'attention' | 'recent' | 'priority';

export interface FilterState {
  query: string;
  needsAttention: boolean; // only apps with ≥1 signal
  week: boolean; // added or applied within THRESHOLDS.recentDays
  statuses: string[]; // multi-select; empty = all statuses
  priorities: string[]; // multi-select; empty = all priorities
  sort: SortKey;
}

const DEFAULT: FilterState = { query: '', needsAttention: false, week: false, statuses: [], priorities: [], sort: 'recent' };

function searchBlob(a: DecoratedApp): string {
  return [
    a.company, a.status, a.priority,
    a.details?.location, a.details?.platform,
    a.details?.nextStep, a.details?.myNotes, a.details?.researchNotes,
    ...a.contacts.map((c) => c.name),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

const rank = (p: string) => PRIORITY_RANK[p] ?? 99;
const desc = (a?: string, b?: string) => ((b ?? '') < (a ?? '') ? -1 : (b ?? '') > (a ?? '') ? 1 : 0);
// id (app_NNN) is assigned max+1, so it's a precise creation-order key — newest = highest number.
const idNum = (id: string) => { const m = /(\d+)$/.exec(id); return m ? +m[1] : -1; };
const newest = (a: DecoratedApp, b: DecoratedApp) => idNum(b.id) - idNum(a.id);

export function useFilters(apps: DecoratedApp[], today: string) {
  const [filter, setFilter] = useState<FilterState>(DEFAULT);

  const visible = useMemo(() => {
    let list = apps;

    if (filter.needsAttention) list = list.filter((a) => a.signals.length > 0);

    if (filter.week) {
      list = list.filter((a) => {
        const added = daysSince(a.dateAdded, today);
        const applied = a.details?.dateApplied ? daysSince(a.details.dateApplied, today) : null;
        return (added != null && added <= THRESHOLDS.recentDays) || (applied != null && applied <= THRESHOLDS.recentDays);
      });
    }

    if (filter.statuses.length) list = list.filter((a) => filter.statuses.includes(a.status));
    if (filter.priorities.length) list = list.filter((a) => filter.priorities.includes(a.priority));

    const q = filter.query.trim().toLowerCase();
    if (q) list = list.filter((a) => searchBlob(a).includes(q));

    const sorted = [...list];
    if (filter.sort === 'attention') {
      sorted.sort((a, b) => b.signals.length - a.signals.length || desc(a.details?.lastUpdate, b.details?.lastUpdate) || newest(a, b));
    } else if (filter.sort === 'recent') {
      sorted.sort(newest);
    } else if (filter.sort === 'priority') {
      sorted.sort((a, b) => rank(a.priority) - rank(b.priority) || newest(a, b));
    }
    return sorted;
  }, [apps, filter, today]);

  // toggle helpers shared by the toolbar dropdowns and the pulse chips
  const toggleStatus = (s: string) =>
    setFilter((f) => ({ ...f, statuses: f.statuses.includes(s) ? f.statuses.filter((x) => x !== s) : [...f.statuses, s] }));
  const togglePriority = (p: string) =>
    setFilter((f) => ({ ...f, priorities: f.priorities.includes(p) ? f.priorities.filter((x) => x !== p) : [...f.priorities, p] }));
  const clearAll = () => setFilter((f) => ({ ...f, needsAttention: false, week: false, statuses: [], priorities: [] }));
  const hasFilters = filter.needsAttention || filter.week || filter.statuses.length > 0 || filter.priorities.length > 0;

  return { filter, setFilter, visible, toggleStatus, togglePriority, clearAll, hasFilters };
}
