const { calcPrice } = require("../functions/calcPrice");

test("calculate price for language: english, symboles: 5000, file format: standard", () => {
  expect(calcPrice("en", 5000)).toBe(600);
});

test("calculate price for language: english, symboles: 5000, file format: other", () => {
  expect(calcPrice("en", 5000, "other")).toBe(720);
});

test("calculate price for language: english, symboles: 100, file format: standard", () => {
  expect(calcPrice("en", 100)).toBe(120);
});

test("calculate price for language: english, symboles: 100, file format: other", () => {
  expect(calcPrice("en", 100, "other")).toBe(120);
});

test("calculate price for language: russian, symboles: 5000, file format: standard", () => {
  expect(calcPrice("ru", 5000)).toBe(250);
});

test("calculate price for language: russian, symboles: 5000, file format: other", () => {
  expect(calcPrice("ru", 5000, "other")).toBe(300);
});

test("calculate price for language: ukranian, symboles: 5000, file format: standard", () => {
  expect(calcPrice("ua", 5000)).toBe(250);
});

test("calculate price for language: ukranian, symboles: 5000, file format: other", () => {
  expect(calcPrice("ua", 5000, "other")).toBe(300);
});

test("calculate price for language: russian, symboles: 5000, file format: other", () => {
  expect(calcPrice("ru", 100, "other")).toBe(50);
});

test("calculate price for language: ukranian, symboles: 5000, file format: other", () => {
  expect(calcPrice("ua", 100, "other")).toBe(50);
});
