import {urlRequest, downloadFile} from "./firebase.mjs";

const lookMore = async () => {
  const moreButton = document.getElementById("Arts__more");
  moreButton.addEventListener("click", async function() {
    const urls = await urlRequest();
    const fileURLs = await downloadFile(urls);
    const imgArea = document.getElementById("Arts__contents");
    for (const fileURL of fileURLs) {
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", fileURL);
      imgArea.appendChild(linkElement);
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", fileURL);
      linkElement.appendChild(imgElement);
    }
  }, false);
};

export {lookMore};
