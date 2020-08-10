function numberZeroDigits(product) {
  if (product < 2) return 0;
  let d = 0,
    k = 5;
  while (k <= product) {
    d += Math.floor(product / k);
    k *= 5;
  }
  // 5000/5 => d = 1000, k = 25;
  // 5000/25 => d = 1200 k = 125
  // 5000/125 => d = 1240 k = 625
  // 5000/625 => d = 1248 k = 3125
  // 5000/3125 => d = 1249 k > 5000 break;
  return d;
}

module.exports = numberZeroDigits;
