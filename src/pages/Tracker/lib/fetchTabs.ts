import { TAB_GIDS, csvUrl } from '../config';
import { parseCSVToObjects } from './csv';

export interface RawTabs {
  applications: Record<string, string>[];
  details: Record<string, string>[];
}

async function fetchTab(gid: string): Promise<Record<string, string>[]> {
  const res = await fetch(csvUrl(gid), { redirect: 'follow' });
  if (!res.ok) throw new Error(`Tab ${gid} returned ${res.status}`);
  return parseCSVToObjects(await res.text());
}

// Both tabs in parallel — they're small, so this is one cheap round trip.
export async function fetchTabs(): Promise<RawTabs> {
  const [applications, details] = await Promise.all([
    fetchTab(TAB_GIDS.applications),
    fetchTab(TAB_GIDS.details),
  ]);
  return { applications, details };
}
