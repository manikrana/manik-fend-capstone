//Pixabay API details
const pb_URL = "https://pixabay.com/api/";
const pb_APIKey = "?key=16569778-f85657fdbba69befc56f6a812&q=";

//function that fetches image from Pixabay API
export async function getImage(city) {
  console.log("Inside Pixabay API fetch request");
  const response = await fetch(
    pb_URL + pb_APIKey + city + "&imagetype=photo&category=travel"
  );
  try {
    const imageData = await response.json();
    console.log(imageData.hits[0].largeImageURL);
    const img = document.createElement("img");
    img.setAttribute("src", imageData.hits[0].largeImageURL);
    img.setAttribute("width", "100%");
    const cityPhoto = document.getElementById("cityPhoto");
    cityPhoto.appendChild(img);
    return "Image has been set";
  } catch (error) {
    console.log("error", error);
  }
}
