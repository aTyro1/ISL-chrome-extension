/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(function () {
  console.log('extension loaded');
});
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v")
    });
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message == 'buttonClicked') {
    chrome.windows.create({
      url: "js/index.html",
      type: 'popup',
      focused: true,
      width: 480,
      height: 480,
      top: 0
    }, () => {
      console.log('opened popup!');
    });
  }
});
/******/ })()
;
//# sourceMappingURL=background.js.map