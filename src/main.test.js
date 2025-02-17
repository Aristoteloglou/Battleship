const capitalize = require("./main");
const { test, expect } = require("@jest/globals");

test("Reverse string.", () => {
  expect(capitalize("YEA")).toBe("AEY");
});
