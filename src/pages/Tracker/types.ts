// Domain model for the dashboard. Dates are 'yyyy-mm-dd' strings (or '').

export interface Application {
  id: string;
  company: string;
  status: string;
  priority: string;
  link: string;
  dateAdded: string;
}

export interface Details {
  id: string;
  minYoe: string;
  dateApplied: string;
  lastUpdate: string;
  myNotes: string;
}

export type SignalType =
  | 'saved-stale'
  | 'applied-stale'
  | 'reachedout-stale'
  | 'responded-stale';

export interface Signal {
  type: SignalType;
  label: string;
  severity: 'high' | 'medium';
}

// An application with its 1:1 Details attached (facts only — cacheable).
export interface JoinedApp extends Application {
  details?: Details;
}

// JoinedApp decorated with live-derived signals (NOT cached — recomputed each render).
export interface DecoratedApp extends JoinedApp {
  signals: Signal[];
}

// ---- write inputs (see lib/writeApi.ts) ----
export interface NewApplication {
  company: string;
  link: string;
  status: string;
  priority: string;
  minYoe: string;
  notes: string;
}
