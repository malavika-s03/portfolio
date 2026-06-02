import { useState } from 'react';
import { contactHandle, contactLabel, parseContact } from '../lib/parseContact';
import type { Contact } from '../types';

// Contacts as click-to-copy chips, plus a paste-one-field quick add (smart-routes to the column).
export function Contacts({
  contacts,
  canAdd,
  onAdd,
}: {
  contacts: Contact[];
  canAdd: boolean;
  onAdd: (parsed: ReturnType<typeof parseContact>) => Promise<unknown>;
}) {
  const [raw, setRaw] = useState('');
  const [adding, setAdding] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (c: Contact) => {
    navigator.clipboard?.writeText(contactHandle(c));
    setCopied(c.contactId);
    window.setTimeout(() => setCopied((id) => (id === c.contactId ? null : id)), 1200);
  };

  const submit = async () => {
    const parsed = parseContact(raw);
    if (!parsed || adding) return;
    setAdding(true);
    try {
      await onAdd(parsed);
      setRaw('');
    } catch {
      /* error surfaced by the mutation layer */
    } finally {
      setAdding(false);
    }
  };

  if (!canAdd && contacts.length === 0) return null;

  return (
    <section className="jt-section">
      <h3 className="jt-section-title">Contacts ({contacts.length})</h3>

      {contacts.length > 0 && (
        <div className="jt-chips">
          {contacts.map((c) => (
            <button key={c.contactId} className="jt-chip" onClick={() => copy(c)} title={`Copy ${contactHandle(c)}`}>
              {contactLabel(c)}
              <span className="jt-chip-copy">{copied === c.contactId ? 'copied' : '⧉'}</span>
            </button>
          ))}
        </div>
      )}

      {canAdd && (
        <div className="jt-add-contact">
          <input
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="Paste a name, email, or LinkedIn…"
          />
          <button onClick={submit} disabled={!raw.trim() || adding}>{adding ? '…' : 'Add'}</button>
        </div>
      )}
    </section>
  );
}
