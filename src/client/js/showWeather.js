export function showWeather(date, weatherData) {
  //trip variable
  let trip = 0;
  const tempDate = date.slice(3, 5);
  const tempMonth = date.slice(0, 2);
  const tempYear = date.slice(6, 10);
  const newDate = tempYear + "-" + tempMonth + "-" + tempDate;
  console.log(newDate);
  console.log("Inside show weather", date, weatherData);
  for (let i = 0; i < weatherData.data.length; i++) {
    if (newDate == weatherData.data[i].datetime) {
      const actualWeather = weatherData.data[i];
      console.log(actualWeather);
      const tripDetailsPlaceholder = document.getElementById("tripDetails");
      const weatherInfo = document.createElement("h2");
      const weatherIcon = document.createElement("img");
      weatherInfo.innerHTML = `On ${date}, it will be ${actualWeather.temp}&#176;C<br>High: ${actualWeather.high_temp} | Low: ${actualWeather.low_temp}<br>Weather: ${actualWeather.weather.description}`;

      weatherIcon.setAttribute(
        "src",
        `https://www.weatherbit.io/static/img/icons/${actualWeather.weather.icon}\.png`
      );
      weatherIcon.style.width = "25%";
      tripDetailsPlaceholder.appendChild(weatherInfo);
      tripDetailsPlaceholder.appendChild(weatherIcon);
      trip++;
      //display the save trip button
      document.getElementById("saveTripHolder").style.display = "inline";
    }
  }
  if (trip == 0) {
    const tripDetailsPlaceholder = document.getElementById("tripDetails");
    const weatherInfo = document.createElement("h2");
    weatherInfo.innerHTML = `Your travel date is a bit too far for any weather predictions. Please check back in within 16 days of your travel plans to check weather on ${date}`;
    tripDetailsPlaceholder.appendChild(weatherInfo);
    document.getElementById("saveTripHolder").style.display = "inline";
  }
}
