function isPangram(str) {
  let string = str.replace(/[^a-z]/gi, "");
  let arr = [],
    count = 0;
  for (let i = 0; i < string.length; i++) {
    if (!arr[string[i]]) {
      count = count + 1;
      arr[string[i]] = 1;
    } else {
      arr[string[i]]++;
    }
  }
  console.log(arr);
  return count === 26;
}
