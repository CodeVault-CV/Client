import registerContentScripts from "./registerContentScripts";

registerContentScripts();

function handleClick() {
  console.log("clicked");
  // UI 열고 닫기
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.id === undefined) return;

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    func: handleClick
  });
});