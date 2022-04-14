const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/routeA", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "routeA.html"));
});

app.get("/routeB", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "routeB.html"));
});

app.listen(3000);
