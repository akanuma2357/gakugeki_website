const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const app = express();

const artsRouter = require("./routes/arts.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "routes")));
app.use("/", artsRouter);

app.get("/urlRequest", function(req, res, next) {
  res.json(["a_beautiful_mountain_landscape.png"]);
});

exports.app = functions.https.onRequest(app);
