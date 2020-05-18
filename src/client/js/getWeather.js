//function that fetches weather from Weatherbit API
export async function getWeather(wb_URL, city, wb_APIKey) {
  console.log("Inside Weatherbit API fetch request");
  const response = await fetch(wb_URL + city + wb_APIKey);
  try {
    const image = await response.json();
    console.log(image);
  } catch (error) {
    console.log("error", error);
  }
}
