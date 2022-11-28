/* Response Interceptors */
type ResInterceptorParam = (data: any) => void;

type interceptListener = (data: any) => void;
interface iInterceptor {
  addListener: (data: any) => void;
}

// jQuery AJAX response interceptor
declare global {
  interface Window {
    $: any;
  }
}
const interceptJqueryResponseBody: iInterceptor = (() => {
  const listeners: interceptListener[] = [];

  const notify = (data: any) => {
    listeners.forEach(listener => listener(data));
  }

  const addListener = (listener: interceptListener) => {
    listeners.push(listener);
  }

  if (window?.$) {
    window.$.ajaxSetup({
      dataFilter: function (data: string) {
        notify(data);
        return data;
      }
    });
  }

  return {
    addListener
  }
})();

function interceptJqueryRes(cb: ResInterceptorParam) { // Inject and add listener
  if (window?.$) {
    window.$.ajaxSetup({
      dataFilter: function (data: string) {
        cb(data);
        return data;
      }
    });
  }
}

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

// Fetch response interceptor
function interceptFetchRes(cb: ResInterceptorParam) {
  ((fetch) => {
    window.fetch = async (...args) => {
      const res = await fetch(...args);

      res
        .clone()
        .json()
        .then(data => cb(data));

      return res;
    }
  })(window.fetch);
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
    interceptFetchRes(notifyRes);
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