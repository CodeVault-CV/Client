import wsResponseBodyInterceptor from "./interceptor/wsResponseInterceptor";
import wsRequestBodyInterceptor from "./interceptor/wsRequestInterceptor";
import { trackerEvent } from "../common/tracker/interface";
import { getMessageType, parseData } from "./parseGradeMessage";

console.log("CodeVault running...");

const createEvent = (
  messageType: Exclude<ReturnType<typeof getMessageType>, "irrelevant">,
  parsedData: ReturnType<typeof parseData>
): trackerEvent => {
  if (messageType === "result") {
    return {
      type: parsedData?.passed ? "success" : "fail"
    };
  }
  return {
    type: messageType,
    payload: parsedData
  }
}

const postToIsolated = (data: string) => {
  try {
    const json = JSON.parse(data);

    const messageType = getMessageType(json);
    if (messageType === "irrelevant") return;

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