function handleClick() {
  console.log("clicked");
  // UI 열고 닫기
}

chrome.scripting.registerContentScripts([
  {
    id: "webSocketInterceptor",
    matches: ["https://school.programmers.co.kr/learn/courses/30/lessons/*"],
    js: ["./scripts/webSocketInterceptor.js"],
    world: "MAIN"
  },
  {
    id: "ajaxInterceptor",
    matches: ["https://www.acmicpc.net/problem/*"],
    js: ["./scripts/ajaxInterceptor.js"],
    world: "MAIN"
  }
], () => console.log("registered"));

chrome.action.onClicked.addListener((tab) => {
  if (tab.id === undefined) return;

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    func: handleClick
  });
});