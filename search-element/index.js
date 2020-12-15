function searchElement(a, n) {
  const sort = a.sort((a, b) => b - a);
  const sortUnique = [...new Set(sort)];

  return n > sortUnique.length ? -1 : sortUnique[n - 1];
}
