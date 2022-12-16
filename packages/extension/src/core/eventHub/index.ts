import iEventHub, { eventContext, eventSender } from './interface';

const eventEmitter = {
  fromIsolated: (eventContext: eventContext) => {
    chrome.runtime.sendMessage(eventContext);
    window.postMessage(eventContext);
  },
  fromWorld: (eventContext: eventContext) => {
    window.postMessage(eventContext, '*');
  },
  fromBackground: (tabId: number, eventContext: eventContext) => {
    chrome.tabs.sendMessage(tabId, eventContext);
  },
};

const createEventHub = (): iEventHub => {
  const handlers = new Map<string, eventSender>([
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

  function listen() {
    if (window?.chrome) {
      chrome.runtime.onMessage.addListener((message: eventContext) => {
        handleEvent(message);
      });
    }
    window.addEventListener('message', event => {
      handleEvent(event.data);
    });
  }

  function handleEvent({ target, type, payload }: eventContext) {
    const handler = handlers.get(target);
    if (handler) {
      handler({ type, payload });
    }
  }

  function addHandler(target: string, sendEvent: eventSender) {
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
