import registerContentScripts from "./registerContentScripts";

registerContentScripts();

function handleClick() {
  console.log("clicked");
  // UI 열고 닫기
}

chrome.webRequest.onBeforeRequest.addListener(
  ({ requestBody, tabId }) => {
    chrome.tabs.sendMessage(tabId, "request intercepted");
    chrome.tabs.sendMessage(tabId, JSON.stringify(requestBody?.formData));
  },
  {
    urls: ["https://www.acmicpc.net/submit/*"]
  },
  ["requestBody"]
)

chrome.action.onClicked.addListener((tab) => {
  if (tab.id === undefined) return;

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    func: handleClick
  });
});