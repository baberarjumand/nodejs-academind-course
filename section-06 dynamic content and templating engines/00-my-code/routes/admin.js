const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add a Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProd: true,
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
