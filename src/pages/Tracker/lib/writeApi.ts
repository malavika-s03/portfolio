import { WEB_APP_URL } from '../config';
import type { NewApplication } from '../types';

// POST as text/plain so the browser sends it without a CORS preflight; the Apps Script /exec
// redirects to googleusercontent which serves the JSON with Access-Control-Allow-Origin: *.
async function post<T>(payload: Record<string, unknown>): Promise<T> {
  const res = await fetch(WEB_APP_URL, {
    method: 'POST',
    redirect: 'follow',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = (await res.json()) as { ok: boolean; data?: T; error?: string };
  if (!json.ok) throw new Error(json.error || 'write failed');
  return json.data as T;
}

// Returned by the `add` action (app fields + the partial Details it created).
export interface AddedApp {
  id: string; company: string; status: string; priority: string; link: string;
  dateAdded: string;
  details: { myNotes: string; lastUpdate: string; dateApplied: string; minYoe: string };
}
export interface StatusResult { id: string; status: string; lastUpdate: string; dateApplied?: string }
export interface NotesResult { id: string; myNotes: string; lastUpdate: string }
export interface MinYoeResult { id: string; minYoe: string; lastUpdate: string }

export const addApplication = (input: NewApplication) => post<AddedApp>({ action: 'add', ...input });
export const setStatus = (id: string, status: string) => post<StatusResult>({ action: 'setStatus', id, status });
export const setPriority = (id: string, priority: string) => post<{ id: string; value: string }>({ action: 'setPriority', id, priority });
export const setNotes = (id: string, notes: string) => post<NotesResult>({ action: 'setNotes', id, notes });
export const setMinYoe = (id: string, minYoe: string) => post<MinYoeResult>({ action: 'setMinYoe', id, minYoe });
export const deleteApplication = (id: string) => post<{ id: string }>({ action: 'delete', id });
