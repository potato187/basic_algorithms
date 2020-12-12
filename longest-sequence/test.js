const longesSequence = require("./index");

test("[1, 7, 3, 5, 4, 2]", () => {
  expect(longesSequence([1, 7, 3, 5, 4, 2])).toEqual(3);
});

test("[1, -2, 7, 3, -7, 4, 9, 2, -8, -5, -5, -7, 6, 2, -8, -9, 2, 5, 4, -10]", () => {
  expect(
    longesSequence([
      1,
      -2,
      7,
      3,
      -7,
      4,
      9,
      2,
      -8,
      -5,
      -5,
      -7,
      6,
      2,
      -8,
      -9,
      2,
      5,
      4,
      -10,
    ])
  ).toEqual(4);
});

test("[1,2,3]", () => {
  expect(longesSequence([1, 2, 3])).toEqual(3);
});

test("[4, 1, 2, 4, 3, 5, 4, 6]", () => {
  expect(longesSequence([4, 1, 2, 4, 3, 5, 4, 6])).toEqual(4);
});

test("[1]", () => {
  expect(longesSequence([1])).toEqual(1);
});
