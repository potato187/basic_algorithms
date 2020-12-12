const isTournament = require("./index");

test("test1", () => {
  expect(
    isTournament(
      5,
      [2, 1, 3, 4, 4, 4, 1, 2, 3, 4],
      [3, 2, 1, 3, 2, 1, 5, 5, 5, 5]
    )
  ).toEqual(true);
});

test("test2", () => {
  expect(isTournament(5, [2, 1, 3, 4, 4, 4], [3, 2, 1, 3, 2, 1])).toEqual(
    false
  );
});

test("test3", () => {
  expect(isTournament(4, [2, 1, 3, 4, 4, 4, 1], [3, 2, 1, 3, 2, 1, 4])).toEqual(
    false
  );
});

test("test4", () => {
  expect(isTournament(1, [1], [1])).toEqual(false);
});

test("test5", () => {
  expect(
    isTournament(
      10,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
    )
  ).toEqual(false);
});

test("test6", () => {
  expect(
    isTournament(
      5,
      [1, 2, 1, 1, 2, 2, 2, 3, 3, 4],
      [2, 1, 3, 4, 4, 3, 5, 4, 5, 5]
    )
  ).toEqual(false);
});

test("test7", () => {
  expect(isTournament(2, [1], [2])).toEqual(true);
});
