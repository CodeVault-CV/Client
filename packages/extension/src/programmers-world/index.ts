import wsRequestBodyInterceptor from "./interceptor/wsRequestInterceptor";
import wsResponseBodyInterceptor from "./interceptor/wsResponseInterceptor";

console.log("CodeVault running...");

const logBody = (data: any) => console.log(data);

wsResponseBodyInterceptor.addListener(logBody);
wsRequestBodyInterceptor.addListener(logBody);