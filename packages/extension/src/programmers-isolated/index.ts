import doSomething from "./doSomething";

window.addEventListener("message", (event) => {
  const { type, payload } = event.data;
  if(type === "CodeVault") {
    chrome.runtime.sendMessage({
      type: "programmers",
      payload
    });
  }
});