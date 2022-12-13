import wsRequestBodyInterceptor from "./interceptor/wsRequestInterceptor";
import wsResponseBodyInterceptor from "./interceptor/wsResponseInterceptor";
import { getMessageType, parseData } from "./parseGradeMessage";

console.log("CodeVault running...");

const postToIsolated = (data: string) => {
  try {
    const json = JSON.parse(data);

    const messageType = getMessageType(json);
    if (messageType === "irrelevant") return;

    const parsedData = parseData(json, messageType);

    postMessage({
      type: "CodeVault",
      payload: parsedData
    });
  } catch(e) {
    console.error(e);
  }
};

wsResponseBodyInterceptor.addListener(postToIsolated);
wsRequestBodyInterceptor.addListener(postToIsolated);