//requiring environment variables to protect Aylien API ID and key
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const request = require("request");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

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

//global variables
let allData = {};
const pb_URL = "";

//store city name
app.post("/postCityDate", postCityDate);

function postCityDate(req, res) {
  //console.log(req.body);
  allData = req.body;
  console.log(allData);
  res.send(allData);
}
