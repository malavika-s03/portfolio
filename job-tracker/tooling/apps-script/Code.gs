/**
 * job-tracker -- Applications auto-stamp (bound Apps Script for the "Tracker" sheet).
 * Fires on MANUAL edits in the Sheets UI (NOT on Sheets-API writes by Claude). All columns are
 * located by header NAME, so reordering the sheet can't break it. See CONVENTIONS.md.
 *
 * - New Applications row gets content: fills id (next app_NNN), Date Added (today),
 *   and Priority (default Medium) if blank.
 * - Edit to an existing Applications row: stamps that app's Details.Last Update = today (by id).
 * - Edit to a Details row: stamps that row's own Last Update = today.
 *
 * CANONICAL copy. Install/update: Extensions -> Apps Script -> paste -> Save.
 */

const SHEET_NAME = 'Applications';
const DETAILS_SHEET = 'Details';
const ID_HEADER = 'id';
const DATE_ADDED_HEADER = 'Date Added';
const PRIORITY_HEADER = 'Priority';
const DEFAULT_PRIORITY = 'Medium';
const QUALITY_HEADER = 'Quality';
const DEFAULT_QUALITY = 'Medium';
const LAST_UPDATE_HEADER = 'Last Update';

function onEdit(e) {
  if (!e || !e.range) return;
  const sh = e.range.getSheet();
  if (sh.getName() === DETAILS_SHEET) { stampLastUpdate_(sh, e.range); return; }
  if (sh.getName() !== SHEET_NAME) return;

  const lastCol = sh.getLastColumn();
  const header = sh.getRange(1, 1, 1, lastCol).getValues()[0];
  const idCol = header.indexOf(ID_HEADER) + 1;
  const dateCol = header.indexOf(DATE_ADDED_HEADER) + 1;
  const prioCol = header.indexOf(PRIORITY_HEADER) + 1;
  const qualCol = header.indexOf(QUALITY_HEADER) + 1;
  if (!idCol) return;

  const auto = [idCol, dateCol];
  const first = Math.max(e.range.getRow(), 2);
  const last = e.range.getRow() + e.range.getNumRows() - 1;
  if (last < 2) return;

  for (let r = first; r <= last; r++) {
    const row = sh.getRange(r, 1, 1, lastCol).getValues()[0];
    const hasContent = row.some((v, i) => auto.indexOf(i + 1) === -1 && v !== '' && v !== null);
    if (!hasContent) continue;
    const hadId = !!row[idCol - 1];
    if (!hadId) sh.getRange(r, idCol).setValue(nextId_(sh, idCol));
    if (!hadId && prioCol && !row[prioCol - 1]) sh.getRange(r, prioCol).setValue(DEFAULT_PRIORITY);
    if (!hadId && qualCol && !row[qualCol - 1]) sh.getRange(r, qualCol).setValue(DEFAULT_QUALITY);
    if (dateCol && !row[dateCol - 1]) sh.getRange(r, dateCol).setValue(new Date());
    if (hadId) touchDetailsLastUpdate_(row[idCol - 1]);
  }
}

// Stamp Last Update on the Details row matching id (only if that row already exists).
function touchDetailsLastUpdate_(id) {
  if (!id) return;
  const det = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(DETAILS_SHEET);
  if (!det || det.getLastRow() < 2) return;
  const header = det.getRange(1, 1, 1, det.getLastColumn()).getValues()[0];
  const idCol = header.indexOf(ID_HEADER) + 1;
  const luCol = header.indexOf(LAST_UPDATE_HEADER) + 1;
  if (!idCol || !luCol) return;
  const ids = det.getRange(2, idCol, det.getLastRow() - 1, 1).getValues().flat();
  const idx = ids.indexOf(id);
  if (idx >= 0) det.getRange(idx + 2, luCol).setValue(new Date());
}

// Stamp a directly-edited Details row's own Last Update (skip if they edited Last Update itself).
function stampLastUpdate_(det, range) {
  const row = range.getRow();
  if (row < 2) return;
  const header = det.getRange(1, 1, 1, det.getLastColumn()).getValues()[0];
  const idCol = header.indexOf(ID_HEADER) + 1;
  const luCol = header.indexOf(LAST_UPDATE_HEADER) + 1;
  if (!luCol || range.getColumn() === luCol) return;
  if (idCol && !det.getRange(row, idCol).getValue()) return;
  det.getRange(row, luCol).setValue(new Date());
}

function nextId_(sh, idCol) {
  const last = sh.getLastRow();
  let max = 0;
  if (last >= 2) {
    sh.getRange(2, idCol, last - 1, 1).getValues().flat().forEach((v) => {
      const m = String(v).match(/^app_(\d+)$/);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    });
  }
  return 'app_' + String(max + 1).padStart(3, '0');
}
