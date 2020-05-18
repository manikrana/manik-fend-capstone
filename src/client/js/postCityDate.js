//function that posts the city name in server
export async function postCityDate(url = "", data = {}) {
  console.log("Inside POST city name and date function:", data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const postedData = response.json();
    console.log(postedData);
    return postedData;
  } catch (error) {
    console.log("error", error);
  }
}
