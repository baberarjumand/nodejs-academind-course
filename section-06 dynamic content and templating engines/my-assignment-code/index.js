const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// register ejs as templating engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const rootRouteData = require("./routes/root");
const usersRoutes = require("./routes/users");

app.use(usersRoutes);
app.use(rootRouteData.routes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Error 404", path: "" });
});

app.listen(3000);
