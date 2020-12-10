function differentSubstringsTrie(str) {
  let subStrings = {};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let key = str.substring(i, j + 1);
      if (!subStrings[key]) {
        count++;
        subStrings[key] = 1;
      } else {
        subStrings[key]++;
      }
    }
  }
  return count;
}

console.log(differentSubstringsTrie("abac"));
