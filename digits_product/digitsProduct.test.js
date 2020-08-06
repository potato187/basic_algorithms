const digitsProduct = require('./digitsProduct');

test('Digist Product of 12', () => {
  expect(digitsProduct(12)).toBe(26);
});

test('Digist Product of 13', () => {
  expect(digitsProduct(13)).toBe(-1);
});

test('Digist Product of 19', () => {
  expect(digitsProduct(19)).toBe(-1);
});

test('Digist Product of 1', () => {
  expect(digitsProduct(1)).toBe(1);
});

test('Digist Product of 0', () => {
  expect(digitsProduct(0)).toBe(10);
});

test('Digist Product of 100', () => {
  expect(digitsProduct(100)).toBe(455);
});

test('Digist Product of 108', () => {
  expect(digitsProduct(108)).toBe(269);
});

test('Digist Product of 450', () => {
  expect(digitsProduct(450)).toBe(2559);
});
