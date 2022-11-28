import interceptFetchResponseBody from "../common/interceptor/interceptFetchResponseBody";
import interceptJqueryResponseBody from "../common/interceptor/interceptJqueryResponseBody";

/* Ajax Interceptor */
interface iAjaxInterceptor {
  subscribeResponse(cb: (data: any) => void): iAjaxInterceptor;
  subscribeRequest(cb: (data: any) => void): iAjaxInterceptor;
  start: () => void;
}

export default function createAjaxInterceptor(): iAjaxInterceptor {
  const resSubscribers: ((data: any) => void)[] = [];

  const notifyRes = (data: any) => {
    resSubscribers.forEach(cb => cb(data));
  }

  function start() {
    interceptFetchResponseBody.addListener(notifyRes);
    interceptJqueryResponseBody.addListener(notifyRes);
  }

  function subscribeResponse(cb: (data: any) => void): iAjaxInterceptor {
    resSubscribers.push(cb);
    return ret;
  }

  function subscribeRequest(cb: (data: any) => void): iAjaxInterceptor {
    new Error("not implemented");
    return ret;
  }

  const ret = {
    subscribeRequest,
    subscribeResponse,
    start
  }

  return ret
}