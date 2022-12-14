/**
 * @jest-environment jsdom
 */

import createEventHub from ".";

function flushMessageQueue(ms = 10) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("EventHub", () => {
  it("등록한 이벤트 핸들러에 해당하는 이벤트가 발생하면 핸들러를 실행한다", async () => {
    const eventHub = createEventHub();

    const handler = jest.fn();
    eventHub
      .addHandler("receiver", handler)
      .start();

    window.postMessage({
      to: "receiver",
      type: "test"
    }, "*");
    await flushMessageQueue();

    expect(handler).toBeCalled();
  });
});