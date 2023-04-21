import {urlRequest, downloadFiles, downloadFile} from "./firebase.mjs";

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
      const fileURLs = await downloadFiles(urls);
      const imgArea = document.getElementById("Arts__contents__item");
      const DownloadIconURL = await downloadFile("icons/download.svg");
      for (const fileURL of fileURLs) {
        const ArtBlock = document.createElement("div");
        ArtBlock.classList.add("u-effect-fade");
        ArtBlock.classList.add("u-gallery-item");
        ArtBlock.classList.add("u-gallery-item-1");
        imgArea.appendChild(ArtBlock);
        const ArtImgDiv = document.createElement("div");
        ArtImgDiv.classList.add("u-back-slide");
        ArtBlock.appendChild(ArtImgDiv);
        const ArtButtonDiv = document.createElement("div");
        ArtButtonDiv.classList.add("u-align-center");
        ArtButtonDiv.classList.add("u-over-slide");
        ArtButtonDiv.classList.add("u-shading");
        ArtButtonDiv.classList.add("u-over-slide-1");
        ArtBlock.appendChild(ArtButtonDiv);
        const ArtImg = document.createElement("img");
        ArtImg.classList.add("u-back-image");
        ArtImg.classList.add("u-expanded");
        ArtImg.setAttribute("src", fileURL);
        ArtImg.setAttribute("alt", "AIアート");
        ArtImgDiv.appendChild(ArtImg);
        const ArtButton = document.createElement("button");
        ArtButton.classList.add("u-align-center");
        ArtButton.classList.add("u-border-none");
        ArtButton.classList.add("u-btn");
        ArtButton.classList.add("u-button-style");
        ArtButton.classList.add("u-hover-palette-3-light-2");
        ArtButton.classList.add("u-palette-3-light-1");
        ArtButton.classList.add("u-radius-50");
        ArtButton.classList.add("u-btn-round");
        ArtButton.textContent = "ダウンロード ";
        ArtButton.setAttribute("style", "vertical-align:middle;display:inline;margin-top:50%");
        ArtButtonDiv.appendChild(ArtButton);
        const ArtButtonIcon = document.createElement("img");
        ArtButtonIcon.classList.add("u-gallery-heading");
        ArtButtonIcon.setAttribute("src", DownloadIconURL);
        ArtButtonIcon.setAttribute("style", "vertical-align:middle;display:inline;");
        ArtButtonIcon.setAttribute("height", "20px");
        ArtButtonIcon.setAttribute("width", "20px");
        ArtButton.appendChild(ArtButtonIcon);
        ArtButton.addEventListener("click", function() {
          const filename = "AI_Art.png"
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
  const fileURLs = await downloadFiles(urls);
  const imgArea = document.getElementById("Arts__contents__item");
  const DownloadIconURL = await downloadFile("icons/download.svg");
  for (const fileURL of fileURLs) {
    const ArtBlock = document.createElement("div");
    ArtBlock.classList.add("u-effect-fade");
    ArtBlock.classList.add("u-gallery-item");
    ArtBlock.classList.add("u-gallery-item-1");
    imgArea.appendChild(ArtBlock);
    const ArtImgDiv = document.createElement("div");
    ArtImgDiv.classList.add("u-back-slide");
    ArtBlock.appendChild(ArtImgDiv);
    const ArtButtonDiv = document.createElement("div");
    ArtButtonDiv.classList.add("u-align-center");
    ArtButtonDiv.classList.add("u-over-slide");
    ArtButtonDiv.classList.add("u-shading");
    ArtButtonDiv.classList.add("u-over-slide-1");
    ArtBlock.appendChild(ArtButtonDiv);
    const ArtImg = document.createElement("img");
    ArtImg.classList.add("u-back-image");
    ArtImg.classList.add("u-expanded");
    ArtImg.setAttribute("src", fileURL);
    ArtImg.setAttribute("alt", "AIアート");
    ArtImgDiv.appendChild(ArtImg);
    const ArtButton = document.createElement("button");
    ArtButton.classList.add("u-align-center");
    ArtButton.classList.add("u-border-none");
    ArtButton.classList.add("u-btn");
    ArtButton.classList.add("u-button-style");
    ArtButton.classList.add("u-hover-palette-3-light-2");
    ArtButton.classList.add("u-palette-3-light-1");
    ArtButton.classList.add("u-radius-50");
    ArtButton.classList.add("u-btn-round");
    ArtButton.classList.add("u-btn-2");
    ArtButton.textContent = "ダウンロード ";
    ArtButton.setAttribute("style", "vertical-align:middle;display:inline;margin-top:50%");
    ArtButtonDiv.appendChild(ArtButton);
    const ArtButtonIcon = document.createElement("img");
    ArtButtonIcon.classList.add("u-gallery-heading");
    ArtButtonIcon.setAttribute("src", DownloadIconURL);
    ArtButtonIcon.setAttribute("style", "vertical-align:middle;display:inline;");
    ArtButtonIcon.setAttribute("height", "20px");
    ArtButtonIcon.setAttribute("width", "20px");
    ArtButton.appendChild(ArtButtonIcon);
    ArtButton.addEventListener("click", function() {
      const filename = "AI_Art.png"
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
export {lookMore, getNumList, defaultImage};
