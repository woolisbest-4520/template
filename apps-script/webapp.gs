function doGet() {
  return HtmlService.createHtmlOutput("WebApp Running");
}

function doPost(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "ok",
    data: e.parameter
  }));
}
