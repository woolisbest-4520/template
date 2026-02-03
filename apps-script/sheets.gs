function readSheet(name) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(name);
  return sheet.getDataRange().getValues();
}

function writeSheet(name, values) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(name);
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}
