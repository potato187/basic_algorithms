function isTournament(n, fromV, toV) {
  if (fromV.length !== toV.length) {
    return false;
  }

  let arr = new Array(n).fill(n - 1);
  for (let i = 0; i < fromV.length; i++) {
    arr[fromV[i] - 1]--;
    arr[toV[i] - 1]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isTournament;
