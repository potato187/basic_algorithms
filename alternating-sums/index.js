function alternatingSums(a) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 !== 0) {
      sumB += a[i];
    } else {
      sumA += a[i];
    }
  }
  return [sumA, sumB];
}

console.log(alternatingSums([1, 0]));
