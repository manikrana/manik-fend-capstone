export function handleSubmit(event) {
  event.preventDefault();

  //function-scope variables
  let validation = true;
  let validDate = true;

  //Weathebit API details
  const wb_URL = "https://api.weatherbit.io/v2.0/current?city=";
  const wb_APIKey = "&key=f3d70e82e35143f293346d32719bee9f";

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

  //Store the URL entered by the user
  const city = document.getElementById("city").value;
  const date = document.getElementById("date").value;

  //invoke CountDown function
  validDate = MLib.countDown(city, date);

  validation = MLib.fieldChecker(city, date);
  if (validation == true && validDate == true) {
    //invoke Weatherbit API
    const weatherInfo = MLib.getWeather(wb_URL, city, wb_APIKey)
      .then()
      .catch((error) => {
        console.log("error", error);
      });

    //store city name in server endpoint
    MLib.postCityDate("/postCityDate", { city: city, date: date });

    //invoke get image from Pixabay API
    const image = MLib.getImage(pb_URL, pb_APIKey, city)
      .then()
      .catch((error) => {
        console.log("error", error);
      });
  }
}
