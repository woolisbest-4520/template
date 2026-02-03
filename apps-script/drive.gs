function listFiles(folderId) {
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  const result = [];

  while (files.hasNext()) {
    const f = files.next();
    result.push({ name: f.getName(), id: f.getId() });
  }
  return result;
}
