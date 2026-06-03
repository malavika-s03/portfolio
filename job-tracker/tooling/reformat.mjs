// reformat — re-apply dropdowns, date & number formats to the live sheet, located by header NAME,
// across data rows 2-1000. NON-DESTRUCTIVE: only touches formatting/validation, never cell values —
// safe to run on a populated sheet. Use after reordering columns, adding a column, or changing an
// enum — it re-anchors all dropdowns/formats by header name. (Edit the SPEC/ENUM below to match SCHEMA.)
//
// Usage: node reformat.mjs [spreadsheetId].  Creds from ./.env (gitignored; never logged).

import { readFileSync } from 'node:fs';
import { google } from 'googleapis';

const SHEET_ID = process.argv[2] || '1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns';
const ROWS = 1000;
const credentials = JSON.parse(readFileSync(new URL('./.env', import.meta.url), 'utf8'));
const auth = new google.auth.GoogleAuth({ credentials, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
const sheets = google.sheets({ version: 'v4', auth });

// What each tab's columns should be (by header NAME). Enum values must match CONVENTIONS.md.
// dropdown: [enumValues, strict]  ·  strict=true → only listed values; false → suggestions (free text ok).
const ENUM = {
  Status: ['Saved', 'Applied', 'Reached out', 'Responded', 'Accepted', 'Rejected', 'No response'],
  Priority: ['High', 'Medium', 'Low'],
  WorkMode: ['Remote', 'Hybrid', 'Onsite'],
  MinYOE: ['0', '1', '2', '3', '3+'],
  Approached: ['Not yet', 'Reached out', 'Replied', 'No response'],
  Platform: ['LinkedIn', 'Company site', 'Referral', 'Indeed', 'Wellfound', 'Naukri', 'Other'],
  TheirRole: ['Recruiter', 'Hiring Manager', 'Referral', 'Other'],
};
const SPEC = {
  Applications: { date: ['Date Added'], dropdown: { Status: ['Status', true], Priority: ['Priority', true] } },
  Details: {
    date: ['Date Applied', 'Last Update', 'Follow-up By'],
    number: { Glassdoor: '0.0' },
    dropdown: { Platform: ['Platform', false], 'Work Mode': ['WorkMode', true], 'Min YOE': ['MinYOE', true] },
  },
  Contacts: { date: ['Last Contacted'], dropdown: { 'Their Role': ['TheirRole', false], Approached: ['Approached', true] } },
};

const range = (sheetId, col) => ({ sheetId, startRowIndex: 1, endRowIndex: ROWS, startColumnIndex: col, endColumnIndex: col + 1 });

const m = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
const gid = Object.fromEntries(m.data.sheets.map((s) => [s.properties.title, s.properties.sheetId]));
const header = async (tab) => (await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: `${tab}!1:1` })).data.values?.[0] || [];

const requests = [];
for (const [tab, spec] of Object.entries(SPEC)) {
  if (gid[tab] == null) { console.log(`skip ${tab} (tab missing)`); continue; }
  const cols = await header(tab);
  const at = (name) => cols.indexOf(name);
  for (const name of spec.date || []) {
    const c = at(name); if (c < 0) { console.log(`  ? ${tab}.${name} not found`); continue; }
    requests.push({ repeatCell: { range: range(gid[tab], c), cell: { userEnteredFormat: { numberFormat: { type: 'DATE', pattern: 'yyyy-mm-dd' } } }, fields: 'userEnteredFormat.numberFormat' } });
    console.log(`  date     ${tab}.${name} -> col ${c}`);
  }
  for (const [name, pattern] of Object.entries(spec.number || {})) {
    const c = at(name); if (c < 0) { console.log(`  ? ${tab}.${name} not found`); continue; }
    requests.push({ repeatCell: { range: range(gid[tab], c), cell: { userEnteredFormat: { numberFormat: { type: 'NUMBER', pattern } } }, fields: 'userEnteredFormat.numberFormat' } });
    console.log(`  number   ${tab}.${name} -> col ${c}`);
  }
  for (const [name, [enumKey, strict]] of Object.entries(spec.dropdown || {})) {
    const c = at(name); if (c < 0) { console.log(`  ? ${tab}.${name} not found`); continue; }
    requests.push({ setDataValidation: { range: range(gid[tab], c), rule: { condition: { type: 'ONE_OF_LIST', values: ENUM[enumKey].map((v) => ({ userEnteredValue: v })) }, showCustomUi: true, strict } } });
    console.log(`  dropdown ${tab}.${name} -> col ${c} (${strict ? 'strict' : 'suggest'})`);
  }
}
await sheets.spreadsheets.batchUpdate({ spreadsheetId: SHEET_ID, requestBody: { requests } });
console.log(`\napplied ${requests.length} formatting requests`);
