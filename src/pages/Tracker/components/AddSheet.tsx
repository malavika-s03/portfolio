import { useEffect, useState } from 'react';
import { ADDED_BY_OPTIONS, PRIORITY_OPTIONS, STATUS, STATUS_ORDER } from '../config';
import type { JoinedApp, NewApplication } from '../types';

const WHO_KEY = 'jt:who';

// Add a listing — reuses the slide-over shell. Company, Link, Status, Priority, Notes, Added by.
export function AddSheet({
  open,
  busy,
  error,
  onClose,
  onAdd,
}: {
  open: boolean;
  busy: boolean;
  error: string | null;
  onClose: () => void;
  onAdd: (input: NewApplication) => Promise<JoinedApp>;
}) {
  const [company, setCompany] = useState('');
  const [link, setLink] = useState('');
  const [status, setStatus] = useState<string>(STATUS.SAVED);
  const [priority, setPriority] = useState('Medium');
  const [notes, setNotes] = useState('');
  const [who, setWho] = useState(() => localStorage.getItem(WHO_KEY) || ADDED_BY_OPTIONS[0]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const reset = () => { setCompany(''); setLink(''); setStatus(STATUS.SAVED); setPriority('Medium'); setNotes(''); };

  const submit = async () => {
    if (!company.trim() || busy) return;
    localStorage.setItem(WHO_KEY, who);
    try {
      await onAdd({ company: company.trim(), link: link.trim(), status, priority, notes: notes.trim(), who });
      reset();
      onClose();
    } catch {
      /* error shown below; keep the form so nothing is lost */
    }
  };

  return (
    <>
      <div className={`jt-overlay ${open ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`jt-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <header className="jt-panel-head">
          <div className="jt-panel-head-main">
            <h2 className="jt-panel-title">Add application</h2>
          </div>
          <button className="jt-panel-close" onClick={onClose} aria-label="Close">✕</button>
        </header>

        <div className="jt-panel-body jt-form">
          <label className="jt-form-row">
            <span className="jt-form-label">Company *</span>
            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. Acme" autoFocus />
          </label>
          <label className="jt-form-row">
            <span className="jt-form-label">Link</span>
            <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="job posting URL" />
          </label>
          <div className="jt-form-two">
            <label className="jt-form-row">
              <span className="jt-form-label">Status</span>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                {STATUS_ORDER.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
            <label className="jt-form-row">
              <span className="jt-form-label">Priority</span>
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                {PRIORITY_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </label>
          </div>
          <label className="jt-form-row">
            <span className="jt-form-label">Notes</span>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} placeholder="who to contact, next steps, anything…" />
          </label>
          <label className="jt-form-row">
            <span className="jt-form-label">Added by</span>
            <select value={who} onChange={(e) => setWho(e.target.value)}>
              {ADDED_BY_OPTIONS.map((w) => <option key={w} value={w}>{w}</option>)}
            </select>
          </label>

          {error && <p className="jt-form-error">{error}</p>}
        </div>

        <footer className="jt-panel-foot">
          <button className="jt-foot-btn jt-foot-secondary" onClick={onClose}>Cancel</button>
          <button className="jt-foot-btn jt-foot-primary" onClick={submit} disabled={!company.trim() || busy}>
            {busy ? 'Saving…' : 'Add'}
          </button>
        </footer>
      </aside>
    </>
  );
}
