const express = require("express");

//making the package functions and methods available on the app variable
const app = express();

// Makes the app use the public folder as the storage for static files (images/html/css/...)
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/work", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/work.html");
});

app.get("/about", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/photos", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/photos.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
