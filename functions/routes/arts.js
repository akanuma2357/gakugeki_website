const express = require("express");
const path = require("path");
// const admin = require("firebase-admin");
const router = express.Router();
/*
const serviceAccount = require(
    "../gakugeki-25a64-firebase-adminsdk-41u2i-1e4e305c83.json"
);

const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gakugeki-25a64-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "gakugeki-25a64.appspot.com"
});

const bucket = defaultApp.storage().bucket();

async function download(uploadPath) {
  const STORAGE_ROOT = "https://console.firebase.google.com/project/gakugeki-25a64/storage/gakugeki-25a64.appspot.com/files"
  const bucketName = bucket.name
  const dlPath = encodeURIComponent(uploadPath);
  const dlURL = `${STORAGE_ROOT}/${bucketName}/o/${dlPath}`
  return dlURL
}
*/
router.get("/", function(req, res, next) {
  // const imgs = download("a_beautiful_mountain_landscape.png")
  res.render("index.ejs");
  router.use(express.static(path.resolve(__dirname, "..", "public")));
});

module.exports = router;
