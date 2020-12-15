function sumDigits(a) {
  let sum = 0;
  while (a) {
    sum += a % 10;
    a = Math.floor(a / 10);
  }

  return sum;
}

function digitalSumSort(a) {
  return a.sort((a, b) => {
    let sum1 = sumDigits(a),
      sum2 = sumDigits(b);
    if (sum1 === sum2) {
      return a - b;
    }

    return sum1 - sum2;
  });
}

module.exports = digitalSumSort;
