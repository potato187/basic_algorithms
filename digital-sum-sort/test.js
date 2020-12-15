const digitalSumSort = require("./index");

test("test 2", () => {
  expect(digitalSumSort([1, 10, 100, 1000])).toEqual([1, 10, 100, 1000]);
});

test("test 3", () => {
  expect(digitalSumSort([22, 13, 400, 404, 8, 701])).toEqual([
    13,
    22,
    400,
    8,
    404,
    701,
  ]);
});

test("test 3", () => {
  expect(
    digitalSumSort([31, 33, 26, 44, 19, 17, 17, 25, 39, 21, 26, 18, 23, 20, 21])
  ).toEqual([20, 21, 21, 31, 23, 33, 25, 17, 17, 26, 26, 44, 18, 19, 39]);
});

test("test 3", () => {
  expect(digitalSumSort([1, 2, 20, 11, 13, 21, 30, 31, 31, 4])).toEqual([
    1,
    2,
    11,
    20,
    21,
    30,
    4,
    13,
    31,
    31,
  ]);
});
