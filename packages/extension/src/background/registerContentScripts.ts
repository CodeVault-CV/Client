/**
 * Content script를 등록한다.
 * - 사용할 content script는 src 폴더에 디렉토리로 생성하고 webpack의 entry에 추가해야 한다.
 * - js 파일의 경로는 dist가 기준이다.
 */
export default function registerContentScripts() {
  chrome.scripting.registerContentScripts([
    // Programmers scripts
    {
      id: "CodeVault-programmers-world",
      matches: ["https://school.programmers.co.kr/learn/courses/30/lessons/*"],
      js: ["js/programmers-world.js"],
      world: "MAIN"
    },
    {
      id: "CodeVault-programmers-isolated",
      matches: ["https://school.programmers.co.kr/learn/courses/30/lessons/*"],
      js: ["js/programmers-isolated.js"],
    },
    // Boj scripts
    {
      id: "CodeVault-boj-world",
      matches: ["https://www.acmicpc.net/status*", "https://www.acmicpc.net/submit/*"],
      js: ["js/boj-world.js"],
      world: "MAIN"
    },
    {
      id: "CodeVault-boj-isolated",
      matches: ["https://www.acmicpc.net/submit/*"],
      js: ["js/boj-isolated.js"]
    }
  ]);
}