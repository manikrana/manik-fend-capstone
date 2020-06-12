export function countDown(city, date) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  console.log("Today's Date:", today);
  console.log("Selected Date:", date);
  const daysToGo =
    (Date.parse(date) - Date.parse(today)) / (1000 * 60 * 60 * 24);
  console.log(city, " is ", daysToGo, " days away!");

  //update UI
  if (daysToGo <= 0) {
    const errorMessagePlaceholder = document.getElementById("errorMessage");
    const errorMessage = document.createElement("h2");
    errorMessage.innerHTML = "Please pick a date starting tomorrow!";
    errorMessagePlaceholder.appendChild(errorMessage);
    return false;
  }
  const daysMessage = document.createElement("h2");
  if (daysToGo === 1) {
    daysMessage.innerHTML = `${city} is ${daysToGo} day away!`;
  }
  if (daysToGo > 1) {
    daysMessage.innerHTML = `${city} is ${daysToGo} days away!`;
  }
  const section = document.getElementById("daysAway");
  section.appendChild(daysMessage);
  return true;
}
