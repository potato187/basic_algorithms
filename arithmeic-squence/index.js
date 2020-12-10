function isArithmeticProgression(sequence) {
  for (let i = 2; i < sequence.length; i++) {
    if (sequence[i] - sequence[i - 1] !== sequence[i - 1] - sequence[i - 2]) {
      return false;
    }
  }
  return true;
}
