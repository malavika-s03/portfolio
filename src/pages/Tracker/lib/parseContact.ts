import type { ParsedContact } from '../types';

// "Paste anything" -> route to the right column: an email, a LinkedIn/URL, or a name.
export function parseContact(raw: string): ParsedContact | null {
  const s = raw.trim();
  if (!s) return null;
  if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s)) return { email: s, name: s.split('@')[0] };
  if (/^(https?:\/\/|www\.)|linkedin\.com/i.test(s)) return { linkedin: s };
  return { name: s };
}

// Label + the value to copy for a contact chip (email > linkedin > name).
export function contactHandle(c: { name: string; email: string; linkedin: string }): string {
  return c.email || c.linkedin || c.name;
}
export function contactLabel(c: { name: string; email: string; linkedin: string }): string {
  if (c.name) return c.name;
  if (c.email) return c.email;
  if (c.linkedin) return c.linkedin.replace(/^https?:\/\//, '').replace(/^www\./, '');
  return 'contact';
}
