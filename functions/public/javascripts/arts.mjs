import {urlRequest, downloadFile} from "./firebase.mjs";

const lookMore = async (numList) => {
  const moreButton = document.getElementById("Arts__more");
  let clickCount = 1
  moreButton.addEventListener("click", async function() {
    if (clickCount < 37){
      const urls = []
      for (let i = 0; i < 3; i++){
        const strNum = ("000"+String(numList[i+3*clickCount])).slice(-3)
        urls.push("AI_arts/"+strNum+".png")
      }
      const fileURLs = await downloadFile(urls);
      const imgArea = document.getElementById("Arts__contents__item");
      for (const fileURL of fileURLs) {
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", fileURL);
        imgArea.appendChild(linkElement);
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", fileURL);
        linkElement.appendChild(imgElement);
      }
      clickCount += 1
    }
  }, false);
};

const getNumList = async () => {
  const numList = await urlRequest();
  return numList
}
const defaultImage = async (numList) => {
  const urls = []
  for (let i = 0; i < 3; i++){
    const strNum = ("000"+String(numList[i])).slice(-3)
    urls.push("AI_arts/"+strNum+".png")
  }
  const fileURLs = await downloadFile(urls);
  const imgArea = document.getElementById("Arts__contents__item");
  for (const fileURL of fileURLs) {
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", fileURL);
    linkElement.download = "AIart.png"
    imgArea.appendChild(linkElement);
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", fileURL);
    linkElement.appendChild(imgElement);
  }
}
export {lookMore,getNumList,defaultImage};
