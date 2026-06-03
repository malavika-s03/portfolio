/**
 * job-tracker -- write endpoint (bound Apps Script Web App). Lives alongside Code.gs (onEdit).
 *
 * Deploy: Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone with the link.
 * Copy the /exec URL into the dashboard's config.ts (WEB_APP_URL).
 * RE-DEPLOY (Manage deployments > edit > New version) after ANY edit to this file -- doPost is
 * NOT live like onEdit.
 *
 * Runs as the owner, so it has edit rights -- no service-account key in the browser. The dashboard
 * POSTs text/plain JSON {action, ...}; we set id/dates/Added by/Priority ourselves (API writes do
 * not fire onEdit). NON-DESTRUCTIVE: only append/edit -- no delete.
 */

const API_TOKEN = ''; // optional shared secret; '' = open (auth out of scope for now)

function doPost(e) {
  try {
    const b = JSON.parse(e.postData.contents);
    if (API_TOKEN && b.token !== API_TOKEN) throw new Error('forbidden');
    let data;
    switch (b.action) {
      case 'add': data = apiAdd_(b); break;
      case 'setStatus': data = apiSetStatus_(b); break;
      case 'setPriority': data = apiSetField_('Priority', b.id, b.priority); break;
      case 'setNotes': data = apiSetNotes_(b); break;
      case 'addContact': data = apiAddContact_(b); break;
      default: throw new Error('unknown action: ' + b.action);
    }
    return apiJson_({ ok: true, data: data });
  } catch (err) {
    return apiJson_({ ok: false, error: String((err && err.message) || err) });
  }
}

// Lets you sanity-check the deployment in a browser (should return JSON, not an error page).
function doGet() {
  return apiJson_({ ok: true, ping: 'job-tracker write API' });
}

function apiJson_(obj) {
  // NOTE: keep `return` and its value short / on one logical line — a bare `return` on its own
  // line triggers JS automatic-semicolon-insertion and returns undefined ("did not return anything").
  var out = ContentService.createTextOutput(JSON.stringify(obj));
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}
function apiSheet_(name) { return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name); }
function apiHeader_(sh) { return sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0]; }
function apiCol_(header, name) { return header.indexOf(name); } // 0-based, -1 if missing
function apiTodayStr_() { return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd'); }
function apiRowFor_(header, want) { return header.map(function (h) { return want[h] !== undefined ? want[h] : ''; }); }

function apiFindRow_(sh, idColIdx0, id) {
  const last = sh.getLastRow();
  if (last < 2) return -1;
  const ids = sh.getRange(2, idColIdx0 + 1, last - 1, 1).getValues().flat();
  const i = ids.indexOf(id);
  return i < 0 ? -1 : i + 2; // 1-based sheet row
}
function apiNextSeq_(sh, colIdx0, prefix) {
  const last = sh.getLastRow();
  let max = 0;
  if (last >= 2) {
    sh.getRange(2, colIdx0 + 1, last - 1, 1).getValues().flat().forEach(function (v) {
      const m = String(v).match(new RegExp('^' + prefix + '_(\\d+)$'));
      if (m) max = Math.max(max, parseInt(m[1], 10));
    });
  }
  return prefix + '_' + ('00' + (max + 1)).slice(-3);
}

function apiAdd_(b) {
  // Write date as a 'yyyy-MM-dd' STRING (not a Date): appended rows don't inherit the column's
  // date format, so a Date value would render with a time component in the sheet.
  const today = apiTodayStr_();
  const status = b.status || 'Saved';
  const priority = b.priority || 'Medium';

  const apps = apiSheet_('Applications');
  const H = apiHeader_(apps);
  const id = apiNextSeq_(apps, apiCol_(H, 'id'), 'app');
  apps.appendRow(apiRowFor_(H, {
    'Company': b.company || '', 'Status': status, 'Priority': priority, 'Link': b.link || '',
    'Date Added': today, 'id': id, 'Added by': b.who || '',
  }));

  const det = apiSheet_('Details');
  const DH = apiHeader_(det);
  det.appendRow(apiRowFor_(DH, {
    'id': id, 'My Notes': b.notes || '', 'Last Update': today,
    'Date Applied': status === 'Applied' ? today : '',
  }));

  return {
    id: id, company: b.company || '', status: status, priority: priority, link: b.link || '',
    dateAdded: today, addedBy: b.who || '',
    details: { myNotes: b.notes || '', lastUpdate: today, dateApplied: status === 'Applied' ? today : '' },
  };
}

function apiSetField_(field, id, value) {
  const apps = apiSheet_('Applications');
  const H = apiHeader_(apps);
  const row = apiFindRow_(apps, apiCol_(H, 'id'), id);
  if (row < 0) throw new Error('id not found: ' + id);
  apps.getRange(row, apiCol_(H, field) + 1).setValue(value);
  return { id: id, field: field, value: value };
}

function apiSetStatus_(b) {
  apiSetField_('Status', b.id, b.status);
  const today = apiTodayStr_(); // 'yyyy-MM-dd' string (see apiAdd_ note)
  const det = apiSheet_('Details');
  const DH = apiHeader_(det);
  const out = { id: b.id, status: b.status, lastUpdate: today };
  let row = apiFindRow_(det, apiCol_(DH, 'id'), b.id);
  if (row < 0) {
    det.appendRow(apiRowFor_(DH, { 'id': b.id, 'Last Update': today, 'Date Applied': b.status === 'Applied' ? today : '' }));
    if (b.status === 'Applied') out.dateApplied = today;
    return out;
  }
  det.getRange(row, apiCol_(DH, 'Last Update') + 1).setValue(today);
  if (b.status === 'Applied') {
    const da = det.getRange(row, apiCol_(DH, 'Date Applied') + 1);
    if (!da.getValue()) da.setValue(today);
    out.dateApplied = today;
  }
  return out;
}

function apiSetNotes_(b) {
  const today = apiTodayStr_();
  const det = apiSheet_('Details');
  const DH = apiHeader_(det);
  const notes = b.notes || '';
  let row = apiFindRow_(det, apiCol_(DH, 'id'), b.id);
  if (row < 0) {
    det.appendRow(apiRowFor_(DH, { 'id': b.id, 'My Notes': notes, 'Last Update': today }));
    return { id: b.id, myNotes: notes, lastUpdate: today };
  }
  det.getRange(row, apiCol_(DH, 'My Notes') + 1).setValue(notes);
  det.getRange(row, apiCol_(DH, 'Last Update') + 1).setValue(today);
  return { id: b.id, myNotes: notes, lastUpdate: today };
}

function apiAddContact_(b) {
  const c = apiSheet_('Contacts');
  const H = apiHeader_(c);
  const cid = apiNextSeq_(c, apiCol_(H, 'contact_id'), 'c');
  c.appendRow(apiRowFor_(H, {
    'contact_id': cid, 'app_id': b.appId, 'Name': b.name || '',
    'Email': b.email || '', 'LinkedIn': b.linkedin || '',
  }));
  return {
    contactId: cid, appId: b.appId, name: b.name || '', theirRole: '',
    email: b.email || '', linkedin: b.linkedin || '', approached: '', lastContacted: '', notes: '',
  };
}
