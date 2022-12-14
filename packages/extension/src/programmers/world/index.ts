import wsResponseBodyInterceptor from "./interceptor/wsResponseInterceptor";
import wsRequestBodyInterceptor from "./interceptor/wsRequestInterceptor";
import { trackerEvent, trackerEventType } from "../../core/tracker/interface";
import { getMessageType, parseData } from "./parseGradeMessage";
import { eventEmitter } from "../../core/eventHub";

console.log("CodeVault running...");

const createEvent = (
  messageType: Exclude<ReturnType<typeof getMessageType>, "IRRELEVANT">,
  parsedData: ReturnType<typeof parseData>
): trackerEvent => {

  let eventType;
  switch (messageType) {
    case "RESULT":
      eventType = parsedData?.passed ? trackerEventType.SUCCESS : trackerEventType.FAIL;
      break;
    case "SCORE":
      eventType = trackerEventType.SCORE;
      break;
    case "START":
      eventType = trackerEventType.START;
      break;
  }

  return {
    type: eventType,
    payload: parsedData
  }
}

const emitEvent = (data: string) => {
  try {
    const json = JSON.parse(data);

    const messageType = getMessageType(json);
    if (messageType === "IRRELEVANT") return;

    const parsedData = parseData(json, messageType);

    eventEmitter.fromWorld({
      target: "GradeTracker",
      type: "Programmers",
      payload: createEvent(messageType, parsedData)
    });
  } catch (e) {
    console.error(e);
  }
};

wsResponseBodyInterceptor.addListener(emitEvent);
wsRequestBodyInterceptor.addListener(emitEvent);