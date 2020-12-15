function areSimilar(a, b) {
  let diff = 0,
    pivot = 0;
  if (a.length < 3 || b.length < 3 || a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      ++diff;
      pivot = i;
    }

    if (diff > 2) { 
      return false;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a[i] === b[pivot] && a[pivot] === b[i];
    }
  }

  return true;
}

module.exports = areSimilar;
