import interceptFetchResponseBody from "./interceptor/fetchResponseBodyInterceptor";
import interceptJqueryResponseBody from "./interceptor/jqueryResponseBodyInterceptor";

/* Ajax Interceptor */
interface iAjaxInterceptor {
  onResponse(cb: (data: any) => void): iAjaxInterceptor;
  onRequest(cb: (data: any) => void): iAjaxInterceptor;
  start: () => void;
}

export default function createAjaxInterceptor(): iAjaxInterceptor {
  const resSubscribers: ((data: any) => void)[] = [];
  const reqSubscribers: ((data: any) => void)[] = [];

  const notifyRes = (data: any) => {
    resSubscribers.forEach(cb => cb(data));
  }

  function start() {
    interceptFetchResponseBody.addListener(notifyRes);
    interceptJqueryResponseBody.addListener(notifyRes);
  }

  function onResponse(cb: (data: any) => void): iAjaxInterceptor {
    resSubscribers.push(cb);
    return ret;
  }

  function onRequest(cb: (data: any) => void): iAjaxInterceptor {
    reqSubscribers.push(cb);
    return ret;
  }

  const ret = {
    onResponse,
    onRequest,
    start
  }

  return ret
}