function differentValuesInMultiplicationTable2(n, m) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (!arr.includes(i * j)) {
        arr[arr.length++] = j * i;
      }
    }
  }
  return arr.length;
}

console.log(differentValuesInMultiplicationTable2(3, 2));
