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
      clickCount += 1
      const fileURLs = await downloadFile(urls);
      const imgArea = document.getElementById("Arts__contents__item");
      for (const fileURL of fileURLs) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", fileURL);
        imgArea.appendChild(imgElement);
        imgElement.addEventListener("click", async function() {
          const filename = "aiArt.png"
          const objXML = new XMLHttpRequest();
          objXML.open("GET", fileURL, true);
          // ダウンロードがblobオブジェクトの指定
          objXML.responseType = "blob";
          // ダウンロード完了時の処理関数
          objXML.onload = function (oEvent) {
              // blobオブジェクト
              const objBlob = objXML.response;
              // blobオブジェクトを指すURLオブジェクト
              const objURL = window.URL.createObjectURL(objBlob);
              // リンクを生成し、JavaScriptからクリック
              const objLink = document.createElement("a");
              document.body.appendChild(objLink);
              objLink.href = objURL;
              objLink.download = filename;
              objLink.click();
          };
          objXML.send();
        });
      }
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
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", fileURL);
    imgArea.appendChild(imgElement);
    imgElement.addEventListener("click", async function() {
      const filename = "aiArt.png"
      const objXML = new XMLHttpRequest();
      objXML.open("GET", fileURL, true);
      objXML.responseType = "blob";
      objXML.onload = function (oEvent) {
          const objBlob = objXML.response;
          const objURL = window.URL.createObjectURL(objBlob);
          const objLink = document.createElement("a");
          document.body.appendChild(objLink);
          objLink.href = objURL;
          objLink.download = filename;
          objLink.click();
      };
      objXML.send();
    });
  }
}
export {lookMore, getNumList, defaultImage};
