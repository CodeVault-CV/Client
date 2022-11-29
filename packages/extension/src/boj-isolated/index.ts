import doSomething from "./doSomething";

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
  localStorage.setItem("testtest", message);
});