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
  validDate = countDown(city, date);

  validation = MLib.fieldChecker(city, date);
  if (validation == true && validDate == true) {
    //invoke Weatherbit API
    const data = getWeather(wb_URL, city, wb_APIKey)
      .then()
      .catch((error) => {
        console.log("error", error);
      });

    //store city name in server endpoint
    postCityName("/postCity", { city: `${city}` });

    //invoke get image from Pixabay API
    const image = getImage(pb_URL, pb_APIKey, city)
      .then()
      .catch((error) => {
        console.log("error", error);
      });
  }
}

//function that posts the city name in server
const postCityName = async (url = "", data = {}) => {
  console.log("Inside POST city name function:", data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    console.log("City name posted!");
  } catch (error) {
    console.log("error", error);
  }
};

//function that fetches image from Pixabay API
const getImage = async (pb_URL, pb_APIKey, city) => {
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
};

//function that fetches weather from Weatherbit API
const getWeather = async (wb_URL, city, wb_APIKey) => {
  console.log("Inside Weatherbit API fetch request");
  const response = await fetch(wb_URL + city + wb_APIKey);
  try {
    const image = await response.json();
    console.log(image);
  } catch (error) {
    console.log("error", error);
  }
};

export function countDown(city, date) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  console.log("Today's Date:", today);
  console.log("Selected Date:", date);
  const daysToGo =
    (Date.parse(date) - Date.parse(today)) / (1000 * 60 * 60 * 24);
  console.log(city, " is ", daysToGo, " days away!");

  if (daysToGo <= 0) {
    const errorMessagePlaceholder = document.getElementById("errorMessage");
    const errorMessage = document.createElement("h4");
    errorMessage.innerHTML = "Please pick a date starting tomorrow!";
    errorMessagePlaceholder.appendChild(errorMessage);
    return false;
  }
  return true;
}
