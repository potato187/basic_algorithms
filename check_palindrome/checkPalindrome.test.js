const checkPalindrome = require("./checkPalindrome");

test("Is palindrome ?", () => {
  expect(checkPalindrome("abba")).toBe(true);
});

test("Is palindrome ?", () => {
  expect(checkPalindrome("az")).toBe(false);
});

test("Is palindrome ?", () => {
  expect(checkPalindrome("a")).toBe(true);
});

test("Is palindrome ?", () => {
  expect(checkPalindrome("abac")).toBe(false);
});

test("Is palindrome ?", () => {
  expect(checkPalindrome("aabaa")).toBe(true);
});

test("Is palindrome ?", () => {
  expect(checkPalindrome("aabaa")).toBe(true);
});

test("Is palindrome ?", () => {
  expect(checkPalindrome("banana")).toBe(false);
});

test("Is palindrome ?", () => {
  expect(checkPalindrome("1122112211")).toBe(true);
});

test("Is palindrome ?", () => {
  expect(
    checkPalindrome(
      "QCFLOPOCZGVXSKSQNSPWQCFLOPOCZGVXSKSQNSPWKGNQOYIWILXUJBNBHEVYMULJNBJYFFIKDTZQMIHHKJZIBAXZVEPHEOPNPZUQOUWMHJPTQZAUTIDHWXFHDEYMQQWSUBSTFEIAMVNQAVUTRBIOUBKMZLQAYFCKIAHKDDSAKMEWYYKDZDBB"
    )
  ).toBe(false);
});
