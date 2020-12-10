const chess = [..."ABCDEDGH"];
function chessBoardCellColor(cell1, cell2) {
  return (
    (chess.indexOf(cell1[0]) +
      chess.indexOf(cell2[0]) +
      2 +
      (1 * cell1[1] + 1 * cell2[1])) %
      2 ===
    0
  );
}

console.log(chessBoardCellColor("A1", "C3"));
