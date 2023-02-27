const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const app = express();

const artsRouter = require("./routes/arts.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "routes")));
app.use("/", artsRouter);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get("/urlRequest", function(req, res, next) {
  const numList = []
  for (let i = 1; i < 112; i++){
    numList.push(i)
  }
  const randomList = []
  for (let i = 0; i < 111; i++){
    const randInt = getRandomInt(111-i)
    randomList.push(numList[randInt])
    numList.splice(randInt,1)
  }
  res.json(randomList);
});

app.post("/download", function(req, res, next) {
  console.log(req.body.url)
  res.download(req.body.url, "AIart.png")
});

exports.app = functions.https.onRequest(app);
