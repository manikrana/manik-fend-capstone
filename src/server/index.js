//requiring environment variables to protect Aylien API ID and key
const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

var aylien = require("aylien_textapi");

// set aylien API credentials
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8085, function () {
  console.log("Example app listening on port 8085!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

//POST request to Aylien API
app.post("/api", getResults);

function getResults(req, res) {
  console.log("I got a request!");
  console.log(req.body);
  console.log("inside getResults: ", req.body.url);
  textapi.sentiment(
    {
      url: `${req.body.url}`,
      mode: "document",
    },
    function (error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      } else {
        console.log("error!", error);
      }
    }
  );
}
