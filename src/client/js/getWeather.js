//Weathebit API details
const wb_URL = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
const wb_APIKey = "&key=f3d70e82e35143f293346d32719bee9f";

//function that fetches weather from Weatherbit API
export async function getWeather(city) {
  console.log("Inside Weatherbit API fetch request");
  const response = await fetch(wb_URL + city + wb_APIKey);
  try {
    const weatherData = await response.json();
    //console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log("error", error);
  }
}
