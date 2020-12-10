function findSquareSide(x, y) {
  let min = 0;
  for (let i = 1; i < 4; i++) {
    let X = Math.pow(x[i] - x[0], 2);
    let Y = Math.pow(y[i] - y[0], 2);
    if (i === 1) {
      min = X + Y;
    } else if (X + Y < min) {
      min = X + Y;
    }
  }
  return min;
}

console.log(findSquareSide([0, 4, 4, 8], [2, 4, 4, 8]));
