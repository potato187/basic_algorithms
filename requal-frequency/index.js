function checkEqualFrequency(inputArray) {
  let obj = inputArray.reduce((obj, key) => {
    obj[key] = obj[key] + 1 || 1;
    return obj;
  }, {});

  let values = Object.values(obj);

  for (let i = 1; i < values.length; i++) {
    if (values[i] !== values[i - 1]) {
      return false;
    }
  }
  return true;
}
