import doSomething from "./doSomething";

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
});