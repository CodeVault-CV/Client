type ResInterceptorParam = (data: any) => void;

// jQuery AJAX response interceptor
declare global {
  interface Window {
    $: JQueryStatic;
  }
}
function interceptJqueryRes(cb: ResInterceptorParam) {
  if (window?.$) {
    window.$.ajaxSetup({
      dataFilter: function (data) {
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

interface iAjaxInterceptor {
  subscribeResponse(cb: (data: any) => void): this;
  subscribeRequest(cb: (data: any) => void): this;
}
export default class AjaxInterceptor implements iAjaxInterceptor {
  private readonly subscribers: ((data: any) => void)[] = [];
  constructor() {
    console.log("ajax interceptor loaded");
    const notify = (data: any) => {
      console.log("res detected");
      this.subscribers.forEach(cb => cb(data));
    }

    interceptFetchRes(notify);
    interceptJqueryRes(notify);
    // interceptXhrRes(notify);

    return this;
  }

  subscribeResponse(cb: (data: any) => void): this {
    this.subscribers.push(cb);
    return this;
  }
  subscribeRequest(cb: (data: any) => void): this {
    return this;
  }
}