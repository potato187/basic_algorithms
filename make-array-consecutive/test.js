const makeArrayConsecutive = require("./index");

test("[6, 2, 3, 8]", () => {
  expect(makeArrayConsecutive([6, 2, 3, 8])).toEqual([4, 5, 7]);
});

test("[-1, -3]", () => {
  expect(makeArrayConsecutive([-1, -3])).toEqual([-2]);
});

test("[6, 2, 3, 8]", () => {
  expect(makeArrayConsecutive([4, 5, 6])).toEqual([]);
});

test("[-1, 3]", () => {
  expect(makeArrayConsecutive([0, 1, 2])).toEqual([]);
});
