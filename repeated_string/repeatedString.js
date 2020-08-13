function repeatedString(inputString) {
  if (inputString.length % 2 !== 0) return false;
  let middle = inputString.length / 2;
  return (
    inputString.substring(0, middle) ===
    inputString.substring(middle, inputString.length)
  );
}
