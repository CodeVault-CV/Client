import registerContentScripts from './registerContentScripts';
import createTrackerFSM from '../core/tracker';
import iTracker, { trackerContext, trackerEventType, trackerState } from '../core/tracker/interface';
import { eventEmitter } from '../core/eventHub';
import parseLanguage from '../boj/parseLanguage';

console.log('background loaded');

// Content script 레지스터 등록
registerContentScripts();

// 채점 트래커
const trackers = new Map<'Programmers' | 'Boj', iTracker>([
  [
    'Programmers',
    createTrackerFSM(new Map([[trackerState.DONE, [(context: trackerContext) => console.log(context)]]])),
  ],
  ['Boj', createTrackerFSM(new Map([[trackerState.DONE, [(context: trackerContext) => console.log(context)]]]))],
]);

// 백그라운드 이벤트 헨들러
chrome.runtime.onMessage.addListener(message => {
  const { type, payload } = message;
  if (type === undefined) {
    throw new Error('Background로 유효하지 않은 이벤트가 전송됨');
  }

  trackers.get(type)?.send(payload);
});

// 백준 문제 제출 감지
chrome.webRequest.onBeforeRequest.addListener(
  ({ method, requestBody, tabId }) => {
    if (method === 'GET' || requestBody?.formData === undefined) return;
    const { formData } = requestBody;

    const code = formData.source[0];
    const problemId = formData.problem_id[0];
    const language = formData.language[0];

    eventEmitter.fromBackground(tabId, {
      target: 'GradeTracker',
      type: 'Boj',
      payload: {
        type: trackerEventType.START,
        payload: {
          platform: 'boj',
          code,
          problemId,
          language: parseLanguage(language),
        },
      },
    });
  },
  {
    urls: ['https://www.acmicpc.net/submit/*'],
  },
  ['requestBody'],
);

// 익스텐션 아이콘 클릭시 동작
function handleClick() {
  console.log('clicked');
  // UI 토글 실행
}

chrome.action.onClicked.addListener(tab => {
  if (tab.id === undefined) return;

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    func: handleClick,
  });
});
