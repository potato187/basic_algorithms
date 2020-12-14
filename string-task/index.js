function stringTask2(str) {
  if (str.length === 0) return "";
  let s = str.replace(/A|O|Y|E|U|I/gi, "").toLowerCase();
  let t = [...s].join(".");
  return "." + t;
}

function upperCase(str) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase()).replace(/\s/g, "");
}
