function getFormResponses() {
  const form = FormApp.getActiveForm();
  return form.getResponses().map(r => r.getItemResponses());
}

function addFormItem(title, type = "TEXT") {
  const form = FormApp.getActiveForm();
  if (type === "TEXT") form.addTextItem().setTitle(title);
  if (type === "PARAGRAPH") form.addParagraphTextItem().setTitle(title);
}
