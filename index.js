/* global __dirname */
const EXPRESS = require("express");
const PATH = require("path");
const APP = EXPRESS();

const PORT = 3000;

APP.use(EXPRESS.static("./public"));

APP.get("/", function (req, res) {
  res.status(200).sendFile(PATH.join(__dirname, "./public/html", "index.html"));
});

APP.get("/home", function (req, res) {
  res.status(200).sendFile(PATH.join(__dirname, "./public/html", "index.html"));
});

APP.get("/about", function (req, res) {
  res.status(200).sendFile(PATH.join(__dirname, "./public/html", "about.html"));
});

APP.get("/contact", function (req, res) {
  res.status(200).sendFile(PATH.join(__dirname, "./public/html", "contact.html"));
});

APP.get("*", function (req, res) {
  res.status(404).sendFile(PATH.join(__dirname, "./public/html", "404.html"));
});

APP.listen(PORT, () => {
  console.log(`Info Site Server is listening on port : ${PORT}!`);
});
