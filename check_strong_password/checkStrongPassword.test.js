const checkStrongPassword = require("./checkStrongPassword");

test("Test strong password", () => {
  expect(checkStrongPassword("abc1")).toBe(false);
});

test("Test strong password", () => {
  expect(checkStrongPassword("Ab1!")).toBe(false);
});

test("Test strong password", () => {
  expect(checkStrongPassword("Aa123A!")).toBe(true);
});

test("Test strong password", () => {
  expect(checkStrongPassword("AAAAAAAAAAAAAA")).toBe(false);
});

test("Test strong password", () => {
  expect(checkStrongPassword("ABC1&!aaaa")).toBe(true);
});

test("Test strong password", () => {
  expect(checkStrongPassword("!!!!!!!!!")).toBe(false);
});

test("Test strong password", () => {
  expect(checkStrongPassword("12312348!")).toBe(false);
});

test("Test strong password", () => {
  expect(checkStrongPassword("AAAAaaa")).toBe(false);
});
