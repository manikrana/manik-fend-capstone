const validateURL = require("./validateURL.js");

test("Validates the protocol and domain of a URL", () => {
  expect(validateURL("https://google.com")).toBe(true);
  expect(validateURL("https://medium.com")).toBe(true);
  expect(validateURL("httpss://medium.com")).toBe(false);
});
