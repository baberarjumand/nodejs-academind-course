const express = require("express");

const router = express.Router();

const usersData = require("./root");

router.get("/users", (req, res, next) => {
  const users = usersData.users;
  res.render("users", {
    users: users,
    pageTitle: "Users Page",
    path: "/users",
  });
});

module.exports = router;
