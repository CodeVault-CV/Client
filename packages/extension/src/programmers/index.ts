import wsRequestBodyInterceptor from "./interceptor/wsRequestInterceptor";
import wsResponseBodyInterceptor from "./interceptor/wsResponseInterceptor";

const logBody = (data: any) => console.log(data);

wsResponseBodyInterceptor.addListener(logBody);
wsRequestBodyInterceptor.addListener(logBody);