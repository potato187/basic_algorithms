function longestSequence(arr) {
  if (arr.length <= 2) {
    return arr.length;
  }

  let len = arr.length,
    max = 0;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      let sequence = [];
      let diff = arr[j] - arr[i];
      if (diff === 0) {
        continue;
      }

      sequence = [...sequence, arr[i], arr[j]];

      for (let k = j; k < len; k++) {
        if (arr[k] - sequence[sequence.length - 1] !== diff) {
          continue;
        }
        sequence = [...sequence, arr[k]];
      }
      max = max < sequence.length ? sequence.length : max;
    }
  }
  return max;
}

module.exports = longestSequence;
