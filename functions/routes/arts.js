const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.render("index.ejs");
});

router.get("/Home", function(req, res, next) {
  res.render("Home.ejs");
});

router.get("/Arts", function(req, res, next) {
  res.render("Arts.ejs");
});

router.get("/About", function(req, res, next) {
  res.render("About.ejs");
});

module.exports = router;
