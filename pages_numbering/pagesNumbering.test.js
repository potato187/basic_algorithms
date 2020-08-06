const pagesNumbering = require('./pagesNumbering');

test('11 pages', () => {
  expect(pagesNumbering(11)).toBe(13);
});

test('1000 pages', () => {
  expect(pagesNumbering(1000)).toBe(2893)
});

test('13 pages', () => {
  expect(pagesNumbering(13)).toBe(17)
});

test('1 pages', () => {
  expect(pagesNumbering(1)).toBe(1)
});

test('0 pages', () => {
  expect(pagesNumbering(0)).toBe(0);
});
