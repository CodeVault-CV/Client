/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import iEventHub, { EventContext, EventSender } from './interface';

const eventEmitter = {
  fromIsolated: (eventContext: EventContext) => {
    chrome.runtime.sendMessage(eventContext);
    window.postMessage(eventContext);
  },
  fromWorld: (eventContext: EventContext) => {
    window.postMessage(eventContext, '*');
  },
  fromBackground: (tabId: number, eventContext: EventContext) => {
    chrome.tabs.sendMessage(tabId, eventContext);
  },
};

const createEventHub = (): iEventHub => {
  const handlers = new Map<string, EventSender>([
    [
      'GradeTracker',
      ({ type, payload }) => {
        chrome.runtime.sendMessage({
          type,
          payload,
        });
      },
    ],
  ]);

  function handleEvent({ target, type, payload }: EventContext) {
    const handler = handlers.get(target);
    if (handler) {
      handler({ type, payload });
    }
  }

  function listen() {
    if (window?.chrome) {
      chrome.runtime.onMessage.addListener((message: EventContext) => {
        handleEvent(message);
      });
    }
    window.addEventListener('message', event => {
      handleEvent(event.data as EventContext);
    });
  }

  function addHandler(target: string, sendEvent: EventSender) {
    if (handlers.has(target)) {
      throw new Error(`'${target}'에 해당하는 이벤트 헨들러가 이미 존재합니다`);
    }
    handlers.set(target, sendEvent);

    return eventHub;
  }

  const eventHub = {
    addHandler,
    start: listen,
  };

  return eventHub;
};

export { eventEmitter };
export default createEventHub;
