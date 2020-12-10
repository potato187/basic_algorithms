function Calc(bishop, index, step) {
  return String.fromCharCode(bishop.charCodeAt(index) + step);
}

function check(bishop1, bishop2) {
  return (
    Math.abs(bishop1.charCodeAt(0) - bishop2.charCodeAt(0)) ===
    Math.abs(1 * bishop2[1] - 1 * bishop1[1])
  );
}

function bishopDiagonal(bishop1, bishop2) {
  if (bishop1 === bishop2) return [bishop1, bishop2];

  if (bishop1 > bishop2) {
    [bishop1, bishop2] = [bishop2, bishop1];
  }

  if (!check(bishop1, bishop2)) return [bishop1, bishop2];

  if (bishop1[1] < bishop2[1]) {
    while (bishop1[0] !== "a" && bishop1[1] !== "1") {
      bishop1 = Calc(bishop1, 0, -1) + Calc(bishop1, 1, -1);
    }

    while (bishop2[0] !== "h" && bishop2[1] !== "8") {
      bishop2 = Calc(bishop2, 0, 1) + Calc(bishop2, 0, 1);
    }
    return [bishop1, bishop2];
  } else {
    while (bishop1[0] !== "a" && bishop1[1] !== "8") {
      bishop1 = Calc(bishop1, 0, -1) + Calc(bishop1, 1, 1);
    }
    while (bishop2[0] !== "h" && bishop2[1] !== "1") {
      bishop2 = Calc(bishop2, 0, 1) + Calc(bishop2, 1, -1);
    }
    return [bishop1, bishop2];
  }
}

console.log(bishopDiagonal("a8", "h1"));
