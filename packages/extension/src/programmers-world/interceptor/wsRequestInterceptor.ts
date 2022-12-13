import createInterceptor from "../../core/interceptor";

const injectWsRequestInterceptor = (notify: (data: string) => void) => {
  ((send) => {
    window.WebSocket.prototype.send = function (data: string | ArrayBufferLike | Blob | ArrayBufferView) {
      if(typeof data === "string") {
        notify(data);
      }
      return send.apply(this, [data]);
    }
  })(window.WebSocket.prototype.send);
}

const wsRequestBodyInterceptor = createInterceptor(injectWsRequestInterceptor);

export default wsRequestBodyInterceptor;