/**
 * Content script를 등록한다.
 * - 사용할 content script는 src 폴더에 디렉토리로 생성하고 webpack의 entry에 추가해야 한다.
 * - js 파일의 경로는 dist가 기준이다.
 */
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