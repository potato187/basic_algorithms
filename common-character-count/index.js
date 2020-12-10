function countCharacter(str) {
  return [...str].reduce((object, char) => {
    object[char] = object[char] + 1 || 1;
    return object;
  }, {});
}
function min(a, b) {
  return a > b ? b : a;
}
function commonCharacterCount(s1, s2) {
  let count1 = countCharacter(s1);
  let count2 = countCharacter(s2);
  let count = 0;
  for (let key in count1) {
    if (count2[key]) {
      count += min(count1[key], count2[key]);
    }
  }
  return count;
}

console.log(commonCharacterCount("zzzzzzz", "zzzz")); // 3
