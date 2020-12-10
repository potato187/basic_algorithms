function differentSquares(matrix) {
  let squares = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (j + 1 < matrix[i].length) {
        squares[squares.length++] =
          matrix[i][j] +
          "" +
          matrix[i][j + 1] +
          "" +
          matrix[i + 1][j] +
          "" +
          matrix[i + 1][j + 1];
      }
    }
  }

  return [...new Set(squares)].length;
}

console.log(differentSquares([[3]]));
