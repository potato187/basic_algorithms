function pyramidCards(n) {
  if (n === 0) return 0;
  return n * (n + 1) + ((n - 1) * n) / 2;
}
