import registerContentScripts from "./registerContentScripts";

console.log('background loaded');
registerContentScripts();

function handleClick() {
  console.log("clicked");
  // UI 열고 닫기
}

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
});

chrome.webRequest.onBeforeRequest.addListener(
  ({ requestBody, tabId }) => {
    console.log(requestBody?.formData);
    // chrome.tabs.sendMessage(tabId, "request intercepted");
    // chrome.tabs.sendMessage(tabId, JSON.stringify(requestBody?.formData));
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