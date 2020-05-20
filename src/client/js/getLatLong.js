//geonames API details
const gn_URL = "http://api.geonames.org/searchJSON?name=";
const gn_username = "&maxRows=1&username=farfar89433";

export async function getLatLong(city) {
  console.log("Inside GeoNames API fetch request");
  const response = await fetch(gn_URL + city + gn_username);
  try {
    const geoData = await response.json();
    console.log(geoData);
    return geoData;
  } catch (error) {
    console.log("error", error);
  }
}
