/**
 * @jest-environment jsdom
 */

const { handleSubmit } = require("../client/js/handleSubmit");

describe("handleSubmit", () => {
  // returning the more descriptive value
  it("returns something", () => {
    expect(handleSubmit).toBeDefined();
  });
});
