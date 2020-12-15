const areSimilar = require("./index");

test("test1 ", () => {
  expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true);
});

test("test2", () => {
  expect(areSimilar([1, 2, 3], [1, 2])).toBe(false);
});

test("test3", () => {
  expect(areSimilar([1, 2, 3], [3, 2, 1])).toBe(true);
});

test("test3", () => {
  expect(areSimilar([1, 1, 1], [1, 1, 2])).toBe(false);
});

test("test4", () => {
  expect(areSimilar([1, 1], [1, 1, 2])).toBe(false);
});

test("test5", () => {
  expect(areSimilar([1, 1], [1, 1])).toBe(false);
});

test("test6", () => {
  expect(areSimilar([1, 1, 1], [1, 1])).toBe(false);
});

test("test7", () => {
  expect(
    areSimilar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 1, 2, 4, 5, 6, 9, 7, 8, 10])
  ).toBe(false);
});
