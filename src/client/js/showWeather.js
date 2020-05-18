export function showWeather(date, weatherData) {
  const tempDate = date.slice(3, 5);
  const tempMonth = date.slice(0, 2);
  const tempYear = date.slice(6, 10);
  const newDate = tempYear + "-" + tempMonth + "-" + tempDate;

  console.log("Inside show weather", weatherData);
}
