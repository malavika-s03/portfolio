// Map raw CSV rows (keyed by header name) → typed model, and join the three tabs by id.
// This is the ONE place that references sheet column names — a schema rename changes only here.

import type { Application, Contact, Details, JoinedApp } from '../types';
import { normalizeDate } from './dates';
import type { RawTabs } from './fetchTabs';

type Row = Record<string, string>;

const toApplication = (r: Row): Application => ({
  id: r['id'] ?? '',
  company: r['Company'] ?? '',
  status: r['Status'] ?? '',
  priority: r['Priority'] ?? '',
  link: r['Link'] ?? '',
  dateAdded: normalizeDate(r['Date Added'] ?? ''),
  addedBy: r['Added by'] ?? '',
});

const toDetails = (r: Row): Details => ({
  id: r['id'] ?? '',
  platform: r['Platform'] ?? '',
  location: r['Location'] ?? '',
  workMode: r['Work Mode'] ?? '',
  minYoe: r['Min YOE'] ?? '',
  glassdoor: r['Glassdoor'] ?? '',
  salary: r['Salary'] ?? '',
  dateApplied: normalizeDate(r['Date Applied'] ?? ''),
  lastUpdate: normalizeDate(r['Last Update'] ?? ''),
  followUpBy: normalizeDate(r['Follow-up By'] ?? ''),
  nextStep: r['Next Step'] ?? '',
  jobDescription: r['Job Description'] ?? '',
  requirements: r['Requirements'] ?? '',
  researchNotes: r['Research Notes'] ?? '',
  myNotes: r['My Notes'] ?? '',
});

const toContact = (r: Row): Contact => ({
  contactId: r['contact_id'] ?? '',
  appId: r['app_id'] ?? '',
  name: r['Name'] ?? '',
  theirRole: r['Their Role'] ?? '',
  email: r['Email'] ?? '',
  linkedin: r['LinkedIn'] ?? '',
  approached: r['Approached'] ?? '',
  lastContacted: normalizeDate(r['Last Contacted'] ?? ''),
  notes: r['Notes'] ?? '',
});

// A row is real iff its key column is non-empty.
const has = (r: Row, key: string) => (r[key] ?? '').trim().length > 0;

export function buildModel(raw: RawTabs): JoinedApp[] {
  const detailsById = new Map<string, Details>();
  raw.details.filter((r) => has(r, 'id')).forEach((r) => detailsById.set(r['id'].trim(), toDetails(r)));

  const contactsByApp = new Map<string, Contact[]>();
  raw.contacts.filter((r) => has(r, 'app_id')).forEach((r) => {
    const c = toContact(r);
    const list = contactsByApp.get(c.appId) ?? [];
    list.push(c);
    contactsByApp.set(c.appId, list);
  });

  return raw.applications
    .filter((r) => has(r, 'Company') || has(r, 'id'))
    .map(toApplication)
    .map((a) => ({
      ...a,
      details: detailsById.get(a.id),
      contacts: contactsByApp.get(a.id) ?? [],
    }));
}
