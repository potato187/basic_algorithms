const numberZeroDigits = require('./numberZeroDigits');

test('Number zeros at the end of 5!', () => {
  expect(numberZeroDigits(5)).toBe(1);
});

test('Number zeros at the end of 10!', () => {
  expect(numberZeroDigits(10)).toBe(2);
});

test('Number zeros at the end of 100!', () => {
  expect(numberZeroDigits(100)).toBe(24);
});

test('Number zeros at the end of 1!', () => {
  expect(numberZeroDigits(1)).toBe(0);
});

test('Number zeros at the end of 5000!', () => {
  expect(numberZeroDigits(5000)).toBe(1249);
});