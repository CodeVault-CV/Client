import createInterceptor, { interceptorParam } from "../../common/interceptor";

const injectWsRequestInterceptor = (notify: interceptorParam) => {
  ((send) => {
    window.WebSocket.prototype.send = function (data: string | ArrayBufferLike | Blob | ArrayBufferView) {
      notify(data as any);
      return send.apply(this, [data]);
    }
  })(window.WebSocket.prototype.send);
}

const wsRequestBodyInterceptor = createInterceptor(injectWsRequestInterceptor);

export default wsRequestBodyInterceptor;