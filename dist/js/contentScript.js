/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/background/contentScript.js ***!
  \*****************************************/
(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const {
      type,
      value,
      videoId
    } = obj;
    if (type == 'NEW') {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });
  const newVideoLoaded = async () => {
    const signBtnExist = document.getElementsByClassName('bookmark-btn')[0];
    if (!signBtnExist) {
      const signBtn = document.createElement('img');
      console.log(chrome.runtime.getContexts);
      signBtn.src = chrome.runtime.getURL('sl.png');
      signBtn.className = "ytp-button " + "bookmark-btn";
      signBtn.title = "click to start sign translator";
      signBtn.style = 'height:35px;width:35px;margin-top:5px;border:2px solid white;box-shadow:2px 2px black';
      youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
      youtubePlayer = document.getElementsByClassName('video-stream')[0];
      youtubeLeftControls.appendChild(signBtn);
      signBtn.addEventListener("click", launchTranslator);
    }
  };
  const launchTranslator = () => {
    chrome.runtime.sendMessage({
      message: 'buttonClicked'
    });
  };
  newVideoLoaded();
})();
/******/ })()
;
//# sourceMappingURL=contentScript.js.map