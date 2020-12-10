function rowAndColumnChecking(grid, x, y) {
  for (let i = 0; i < 9; i++) {
    if (i !== x && grid[x][y] === grid[i][y]) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (i !== y && grid[x][y] === grid[x][i]) {
      return false;
    }
  }

  return true;
}

function subSudokuChecking(grid) {
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      let object = {};
      for (let i = x * 3; i < x * 3 + 3; i++) {
        for (let j = y * 3; j < y * 3 + 3; j++) {
          if (grid[i][j] !== ".") {
            object[grid[i][j]] = object[grid[i][j]] + 1 || 1;
          }
        }
      }
      for (let value of Object.values(object)) {
        if (value > 1) {
          return false;
        }
      }
    }
  }
  return true;
}

function sudokuChecking(grid) {
  if (grid === null || grid.length !== 9) return false;
  for (let i = 0; i < 9; i++) {
    if (grid[i].length !== 9) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] !== ".") {
        if (!rowAndColumnChecking(grid, i, j)) {
          return false;
        }
      }
    }
  }

  return subSudokuChecking(grid);
}

console.log(
  sudokuChecking([
    ["6", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
  ])
);
