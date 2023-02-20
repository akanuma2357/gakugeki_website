import {initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {getDownloadURL, getStorage, ref} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyDniKKi_GyL80uoQxCT60GvrRQUwBBwdc0",
  authDomain: "gakugeki-25a64.firebaseapp.com",
  databaseURL: "https://gakugeki-25a64-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gakugeki-25a64",
  storageBucket: "gakugeki-25a64.appspot.com",
  messagingSenderId: "639483589568",
  appId: "1:639483589568:web:b51a41db06cda295960e25",
  measurementId: "G-36FW3CRXNB",
};
const app = initializeApp(firebaseConfig);

const urlRequest = async () => {
  const response = await fetch("/gakugeki-25a64/us-central1/app/urlRequest");
  const text = await response.text();
  const urls = JSON.parse(text);
  return urls;
};

const downloadFile = async (files) => {
  const storage = getStorage(app);
  const fileURLs = [];
  for (const file of files) {
    if (file) {
      const fileRef = ref(storage, file);
      await getDownloadURL(fileRef)
          .then((url) => {
            console.log(url);
            fileURLs.push(url);
          });
    }
  }
  return fileURLs;
};

export {urlRequest, downloadFile};
