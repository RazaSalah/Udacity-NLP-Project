const { validate } = require("../client/js/checkURL");

describe("urlValidity", () => {
  test("test if strings are false urls", () => {
    expect(validate("read")).toBeFalsy();
  });

  test("emails are not considered valid urls", () => {
    expect(validate("mailto:ahmed@gmail.com")).toBeFalsy();
  });

  test("expect urls to be true", () => {
    expect(validate("https://www.google.com")).toBeTruthy();
  });

  test("expect empty string to be falsy", () => {
    expect(validate("")).toBeFalsy();
  });
});
