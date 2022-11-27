export default function registerContentScripts() {
  chrome.scripting.registerContentScripts([
    {
      id: "programmersScripts",
      matches: ["https://school.programmers.co.kr/learn/courses/30/lessons/*"],
      js: ["js/programmers.js"],
      world: "MAIN"
    },
    {
      id: "bojScripts",
      matches: ["https://www.acmicpc.net/status*"],
      js: ["js/boj.js"],
      world: "MAIN"
    }
  ], () => console.log("registered"));
}