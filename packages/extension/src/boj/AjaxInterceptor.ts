import interceptFetchResponseBody from "../common/interceptor/interceptFetchResponseBody";
import interceptJqueryResponseBody from "../common/interceptor/interceptJqueryResponseBody";

/* Response Interceptors */
type ResInterceptorParam = (data: any) => void;

// XMLHTTPRequest response interceptor
function interceptXhrRes(cb: ResInterceptorParam) {
  (function (open) {
    console.log("injecting to XMLHTTPRequest");
    XMLHttpRequest.prototype.open = function (method: string, url: any, async?: any, username?: string, password?: string) {
      console.log("XMLHTTPRequest called");
      this.addEventListener("load", () => {
        cb(JSON.parse(this.responseText));
      });
      return open.apply(this, [method, url, async, username, password]);
    };
  })(XMLHttpRequest.prototype.open);
}

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