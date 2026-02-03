function log(data) {
  console.log(JSON.stringify(data, null, 2));
}

function now() {
  return new Date().toISOString();
}
