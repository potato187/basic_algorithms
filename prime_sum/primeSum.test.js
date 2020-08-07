const primeSum = require('./primeSum');


test('Sum of primes <= 2', () => {
  expect(primeSum(2)).toBe(2);
});

test('Sum of primes <= 3 ', () => {
  expect(primeSum(3)).toBe(5);
});

test('Sum of primes <= 5', () => {
  expect(primeSum(5)).toBe(10);
});

test('Sum of primes <= 10000 ', () => {
  expect(primeSum(10000)).toBe(5736396);
});

