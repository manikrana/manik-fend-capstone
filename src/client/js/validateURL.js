//validate URL
function validateURL(url) {
  console.log(url);
  if (url == "") {
    const invalidURL = document.createElement("h4");
    invalidURL.innerHTML =
      "URL field cannot be empty, please enter a valid URL";
    const messagePlaceholder = document.getElementById("errorMessage");
    messagePlaceholder.appendChild(invalidURL);
    return false;
  }
  let protocol = url.match(/^https?:\/\//g);
  let verdict = false;

  if (protocol === null) {
    const invalidURL = document.createElement("h4");
    invalidURL.innerHTML =
      "Enter a valid protocol - Supported protocols are http:// or https://";
    const messagePlaceholder = document.getElementById("errorMessage");
    messagePlaceholder.appendChild(invalidURL);
    return verdict;
  } else {
    verdict = true;
  }

  let domain = url.match(/\./g);
  if (domain === null) {
    const invalidURL = document.createElement("h4");
    invalidURL.innerHTML =
      "Enter a valid domain - No period detected in the domain";
    const messagePlaceholder = document.getElementById("errorMessage");
    messagePlaceholder.appendChild(invalidURL);
    verdict = false;
  } else {
    verdict = true;
  }

  return verdict;
}

export { validateURL };
