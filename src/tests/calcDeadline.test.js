const { expect } = require("@jest/globals");
const { calcDeadline } = require("../functions/calcDeadline");

test("calculate deadline for language: english, symboles: 5000, file type: standart, on day off", () => {
  expect(calcDeadline("en", 5000, "txt", "2021-11-27T09:50:00.000Z")).toBe(
    "30.11.2021, 15:30"
  );
});

test("calculate deadline for language: english, symboles: 100, file type: standart, on day off", () => {
  expect(calcDeadline("en", 100, "txt", "2021-11-27T09:50:00.000Z")).toBe(
    "29.11.2021, 10:00"
  );
});

test("calculate deadline for language: russian, symboles: 100, file type: standart, on day off at night", () => {
  expect(calcDeadline("ru", 100, "txt", "2021-11-27T00:00:00.000Z")).toBe(
    "29.11.2021, 10:00"
  );
});

test("calculate deadline for language: russian, symboles: 5000, file type: other, on friday evening", () => {
  expect(calcDeadline("ru", 5000, "other", "2021-11-26T16:28:00.000Z")).toBe(
    "29.11.2021, 13:40"
  );
});

test("calculate deadline for language: english, symboles: 2500, file type: other, on wednesday evening", () => {
  expect(calcDeadline("en", 2500, "other", "2021-11-24T16:10:00.000Z")).toBe(
    "25.11.2021, 18:46"
  );
});

test("calculate deadline for language: ukranian, symboles: 10000, file type: other, on wednesday at night", () => {
  expect(calcDeadline("en", 10000, "other", "2021-11-24T00:00:00.000Z")).toBe(
    "30.11.2021, 09:36"
  );
});
