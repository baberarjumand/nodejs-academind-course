const express = require("express");

const router = express.Router();

const users = [];

// / => GET
router.get("/", (req, res, next) => {
  res.render("root", {
    pageTitle: "Root Page",
    path: "/",
  });
});

router.post("/", (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect("/users");
});

exports.routes = router;
exports.users = users;
