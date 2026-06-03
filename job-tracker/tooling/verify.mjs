// Connectivity check: can the service account READ and WRITE a given sheet?
// Reversible — writes a marker to a scratch cell, reads it back, then clears it.
// Usage: node verify.mjs [spreadsheetId]
// Creds from ./.env (gitignored); never logged.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { google } from 'googleapis';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SPREADSHEET_ID = process.argv[2] || '1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns';

const credentials = JSON.parse(readFileSync(join(__dirname, '.env'), 'utf8'));
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

try {
  // READ
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const tabs = meta.data.sheets.map((s) => s.properties);
  console.log(`READ  ok — "${meta.data.properties.title}", tab(s): ${tabs.map((t) => `${t.title}(gid ${t.sheetId})`).join(', ')}`);

  // WRITE (reversible): marker into a scratch cell, read back, then clear
  const title = tabs[0].title;
  const cell = `${title}!Z999`;
  const marker = `jt-verify-${Date.now()}`;
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID, range: cell, valueInputOption: 'RAW',
    requestBody: { values: [[marker]] },
  });
  const back = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: cell });
  const roundTripped = back.data.values?.[0]?.[0] === marker;
  await sheets.spreadsheets.values.clear({ spreadsheetId: SPREADSHEET_ID, range: cell });

  console.log(roundTripped ? `WRITE ok — scratch round-trip in ${cell}, then cleared` : `WRITE FAILED — readback mismatch`);
  console.log(roundTripped ? '\n✅ Service account can read AND write this sheet.' : '\n❌ Write verification failed.');
  process.exit(roundTripped ? 0 : 1);
} catch (e) {
  const msg = e?.message || String(e);
  console.log(`FAILED — ${msg}`);
  if (/permission|forbidden|403/i.test(msg)) console.log('\n→ The sheet is not shared with the service account yet (add it as Editor).');
  process.exit(1);
}
