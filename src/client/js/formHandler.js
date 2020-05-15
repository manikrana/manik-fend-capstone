export function handleSubmit(event) {
  event.preventDefault();

  //Clear the earlier error message
  while (document.getElementById("errorMessage").firstElementChild !== null) {
    document.getElementById("errorMessage").firstElementChild.remove();
  }

  //Store the URL entered by the user
  const enteredURL = document.getElementById("url").value;

  //validating URL
  const validation = validateURL(enteredURL);
  console.log(validation);

  //Invoke getSentiment function
  if (validation === true) {
    getSentiment("/api", { url: `${enteredURL}` });
  }
}

//Function that fetches response from Aylien API
const getSentiment = async (url = "", data = "") => {
  console.log("Inside POST:", data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log("newData: ", newData);
    //Update UI
    document.getElementById("polarity").innerHTML =
      "Polarity: " + newData.polarity;
    document.getElementById("polarity_confidence").innerHTML =
      "Subjectivity: " + newData.polarity_confidence;
    document.getElementById("subjectivity").innerHTML =
      "Polarity: " + newData.subjectivity;
    document.getElementById("subjectivity_confidence").innerHTML =
      "Subjectivity: " + newData.subjectivity_confidence;
  } catch (error) {
    console.log("error", error);
  }
};
