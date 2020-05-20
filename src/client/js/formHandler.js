let city = "";
let date = "";

export function handleSubmit(event) {
  event.preventDefault();

  //global scope variables
  let validation = true;
  let validDate = true;
  let weatherData = {};
  let lat = 0;
  let long = 0;

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

  while (document.getElementById("daysAway").firstElementChild !== null) {
    document.getElementById("daysAway").firstElementChild.remove();
  }

  //Store the URL entered by the user
  city = document.getElementById("city").value;
  date = document.getElementById("date").value;

  //invoke CountDown function
  validDate = MLib.countDown(city, date);

  validation = MLib.fieldChecker(city, date);
  if (validation == true && validDate == true) {
    //get proper city name and latLong from Geonames API
    MLib.getLatLong(city)
      .then((result) => {
        return result;
      })
      .then(function (result) {
        city = result.geonames[0].name + ", " + result.geonames[0].countryCode;
        lat = result.geonames[0].lat;
        long = result.geonames[0].lng;
        console.log(city, lat, long);
        return MLib.getWeather(lat, long);
      })
      .then((result) => {
        console.log(result);
        MLib.showWeather(date, result);
      });

    //store city name in server endpoint
    //MLib.postCityDate("/postCityDate", { city: city, date: date });

    //invoke get image from Pixabay API
    MLib.getImage(city)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}

document.getElementById("saveTrip").addEventListener("click", saveTrip);

export function saveTrip() {
  //store city name in server endpoint
  MLib.postCityDate("/postCityDate", {
    city: city,
    date: date,
  });
}
