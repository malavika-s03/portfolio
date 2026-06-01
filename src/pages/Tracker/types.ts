// Domain model for the dashboard. Dates are 'yyyy-mm-dd' strings (or '').

export interface Application {
  id: string;
  company: string;
  status: string;
  priority: string;
  link: string;
  dateAdded: string;
  addedBy: string; // email prefix of whoever added the row (auto-filled by the onEdit script)
}

export interface Details {
  id: string;
  platform: string;
  location: string;
  workMode: string;
  glassdoor: string;
  salary: string;
  tags: string;
  dateApplied: string;
  lastUpdate: string;
  followUpBy: string;
  nextStep: string;
  jobDescription: string;
  requirements: string;
  researchNotes: string;
  myNotes: string;
}

export interface Contact {
  contactId: string;
  appId: string;
  name: string;
  theirRole: string;
  email: string;
  linkedin: string;
  approached: string;
  lastContacted: string;
  notes: string;
}

export type SignalType =
  | 'overdue-followup'
  | 'stale-applied'
  | 'aging-saved'
  | 'in-progress-pending'
  | 'screening-no-plan';

export interface Signal {
  type: SignalType;
  label: string;
  severity: 'high' | 'medium';
}

// An application with its 1:1 Details and 1:many Contacts attached (facts only — cacheable).
export interface JoinedApp extends Application {
  details?: Details;
  contacts: Contact[];
}

// JoinedApp decorated with live-derived signals (NOT cached — recomputed each render).
export interface DecoratedApp extends JoinedApp {
  signals: Signal[];
}
