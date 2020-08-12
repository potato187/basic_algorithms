const formatString = require("./formatString");

test("Format string", () => {
  expect(formatString(" a a  a a")).toBe("a a a a");
});

test("Format string", () => {
  expect(formatString("a    abc     abcd b")).toBe("a abc abcd b");
});

test("Format string", () => {
  expect(formatString("abc")).toBe("abc");
});

test("Format string", () => {
  expect(formatString(" a    abc     abcd b ")).toBe("a abc abcd b");
});

test("Format string", () => {
  expect(formatString(" abc   a aa  a a ")).toBe("abc a aa a a");
});

test("Format string", () => {
  expect(formatString("        a           ")).toBe("a");
});
