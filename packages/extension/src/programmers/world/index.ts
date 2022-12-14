import wsResponseBodyInterceptor from "./interceptor/wsResponseInterceptor";
import wsRequestBodyInterceptor from "./interceptor/wsRequestInterceptor";
import { trackerEvent, trackerEventType } from "../../core/tracker/interface";
import { getMessageType, parseData } from "./parseGradeMessage";

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

const postToIsolated = (data: string) => {
  try {
    const json = JSON.parse(data);

    const messageType = getMessageType(json);
    if (messageType === "IRRELEVANT") return;

    const parsedData = parseData(json, messageType);

    postMessage({
      type: "CodeVault",
      payload: createEvent(messageType, parsedData)
    });
  } catch (e) {
    console.error(e);
  }
};

wsResponseBodyInterceptor.addListener(postToIsolated);
wsRequestBodyInterceptor.addListener(postToIsolated);