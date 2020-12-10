function differentSymbolsNaive(s) {
  let symbols = [...s].reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    return obj;
  }, {});
  return Object.keys(symbols).length;
}

console.log(differentSymbolsNaive("cabca")); // 3
