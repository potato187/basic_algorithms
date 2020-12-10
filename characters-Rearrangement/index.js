function charactersRearrangement(str1, str2) {
  /*   let arr = [];
  for (let i = 0; i < str1.length; i++) {
    arr[str1[i]] = arr[str1[i]] + 1 || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!arr[str2[i]]) {
      arr[str2[i]] = -1;
    } else {
      arr[str2[i]]--;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (arr[str1[i]] !== 0) {
      return false;
    }
  }

  return true; */

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return st1 === str2;
}

charactersRearrangement("abcd", "cbadff");
