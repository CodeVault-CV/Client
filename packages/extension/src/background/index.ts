import registerContentScripts from "./registerContentScripts";
import createTrackerFSM from "../core/tracker";
import iTracker, { trackerContext, trackerState } from "../core/tracker/interface";

console.log('background loaded');

// Content script 레지스터 등록
registerContentScripts();

// 채점 트래커
const trackers = new Map<"programmers" | "boj", iTracker>([
  ["programmers", createTrackerFSM(new Map([
    [
      trackerState.DONE,
      [(context: trackerContext) => console.log(context)]
    ]
  ]))],
  ["boj", createTrackerFSM()],
])

function handleClick() {
  console.log("clicked");
  // UI 열고 닫기
}


chrome.runtime.onMessage.addListener((message) => {
  const { type, payload } = message;
  if (type === undefined) {
    throw new Error("Background로 유효하지 않은 이벤트가 전송됨");
  }

  trackers.get(type)?.send(payload);
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