const lastDigitDiffZero = require('./lastDigitDiffZero');

test('last digit of 5!', () => {
  expect(lastDigitDiffZero(5)).toBe(2);
});

test('last digit of 6!', () => {
  expect(lastDigitDiffZero(6)).toBe(2);
});

test('last digit of 10!', () => {
  expect(lastDigitDiffZero(10)).toBe(8);
});

test('last digit of 100!', () => {
  expect(lastDigitDiffZero(100)).toBe(4);
});

test('last digit of 33!', () => {
  expect(lastDigitDiffZero(33)).toBe(8);
});

test('last digit of 27!', () => {
  expect(lastDigitDiffZero(27)).toBe(8);
});

test('last digit of 14!', () => {
  expect(lastDigitDiffZero(14)).toBe(2);
});
