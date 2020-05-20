export function fieldChecker(city, date) {
  console.log("Inside field checker function!");
  let validation = false;
  if (city == "") {
    const errorMessagePlaceholder = document.getElementById("errorMessage");
    const errorMessage = document.createElement("h2");
    errorMessage.innerHTML = "Please enter a valid city";
    errorMessagePlaceholder.appendChild(errorMessage);
  } else {
    validation = true;
  }
  if (date == "") {
    const errorMessagePlaceholder = document.getElementById("errorMessage");
    const errorMessage = document.createElement("h2");
    errorMessage.innerHTML = "Please enter a date";
    errorMessagePlaceholder.appendChild(errorMessage);
    validation = false;
  } else {
  }

  console.log(validation);

  return validation;
}
