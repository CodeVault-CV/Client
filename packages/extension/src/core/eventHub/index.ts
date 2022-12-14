import iEventHub, { eventContext, eventSender } from "./interface";

const createEventHub = (): iEventHub => {
  const handlers = new Map<string, eventSender>([
    ["background", ({ type, payload }) => {
      chrome.runtime.sendMessage({
        type,
        payload
      });
    }],
  ])

  function listen() {
    if (window?.chrome) {
      chrome.runtime.onMessage.addListener((message: eventContext) => {
        handleEvent(message);
      });
    }
    window.addEventListener("message", (event) => {
      handleEvent(event.data);
    });
  }

  function handleEvent({ to, type, payload }: eventContext) {
    const handler = handlers.get(to);
    if (handler) {
      handler({ type, payload });
    }
  }

  function addHandler(to: string, sendEvent: eventSender) {
    if (handlers.has(to)) {
      throw new Error(`'${to}'에 해당하는 이벤트 헨들러가 이미 존재합니다`);
    }
    handlers.set(to, sendEvent);

    return eventHub;
  }

  const eventHub = {
    addHandler,
    start: listen
  }

  return eventHub
}

export default createEventHub;