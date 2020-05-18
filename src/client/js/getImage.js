//function that fetches image from Pixabay API
export async function getImage(pb_URL, pb_APIKey, city) {
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
    console.log("Image set!");
  } catch (error) {
    console.log("error", error);
  }
}
