const broad = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
function bishopAndPawn(bishop, pawn) {
  if (bishop === pawn) return false;
  return (
    Math.abs(broad[bishop[0]] - broad[pawn[0]]) ===
    Math.abs(1 * pawn[1] - 1 * bishop[1])
  );
}

console.log(bishopAndPawn("h1", "h1"));
