import { countDown } from "./countDown.js";

test("test that validates that the date of travel is in future", () => {
  //create DOM elements for testing purposes
  document.body.innerHTML =
    '<div id="errorMessage"></div><div id="daysAway"></div>';
  expect(countDown("London", "05/31/2020")).toBe(true);
  expect(countDown("Moscow", "06/31/2021")).toBe(true);
  expect(countDown("", "05/31/2021")).toBe(true);
  expect(countDown("Moscow", "03/31/2020")).toBe(false);
  expect(countDown("Bali", "01/15/2020")).toBe(false);
});
