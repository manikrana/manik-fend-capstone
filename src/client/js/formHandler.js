import { showWeatherInfo } from "./showWeather";

export function handleSubmit(event) {
  event.preventDefault();

  //global scope variables
  let validation = true;
  let validDate = true;
  let weatherData = {};

  //Pixabay API details
  const pb_URL = "https://pixabay.com/api/";
  const pb_APIKey = "?key=16569778-f85657fdbba69befc56f6a812&q=";

  //Clear the previous data
  while (document.getElementById("errorMessage").firstElementChild !== null) {
    document.getElementById("errorMessage").firstElementChild.remove();
  }
  while (document.getElementById("cityPhoto").firstElementChild !== null) {
    document.getElementById("cityPhoto").firstElementChild.remove();
  }
  while (document.getElementById("tripDetails").firstElementChild !== null) {
    document.getElementById("tripDetails").firstElementChild.remove();
  }

  //Store the URL entered by the user
  const city = document.getElementById("city").value;
  const date = document.getElementById("date").value;

  //invoke CountDown function
  validDate = MLib.countDown(city, date);

  validation = MLib.fieldChecker(city, date);
  if (validation == true && validDate == true) {
    //invoke Weatherbit API
    MLib.getWeather(city)
      .then((result) => {
        weatherData = result;
        console.log("inside get weather", weatherData);
      })
      .then(MLib.showWeather(date, weatherData));

    //store city name in server endpoint
    MLib.postCityDate("/postCityDate", { city: city, date: date });

    //invoke get image from Pixabay API
    MLib.getImage(pb_URL, pb_APIKey, city)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}
