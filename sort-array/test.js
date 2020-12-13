const selectionSort = require("./index");

test("test1 ", () => {
  expect(selectionSort([175, 103, 187, 181, 129, 164, 122, 124])).toEqual([
    103,
    122,
    124,
    129,
    164,
    175,
    181,
    187,
  ]);
});

test("test2 ", () => {
  expect(selectionSort([16, 15, 8, 18])).toEqual([8, 15, 16, 18]);
});

test("test3 ", () => {
  expect(selectionSort([-54, -23, -74, 4, -81, -10])).toEqual([
    -81,
    -74,
    -54,
    -23,
    -10,
    4,
  ]);
});
