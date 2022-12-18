import createInterceptor from '../../../../core/Interceptor';

const injectWsRequestInterceptor = (notify: (data: string) => void) => {
  (send => {
    window.WebSocket.prototype.send = function sendWrapper(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
      if (typeof data === 'string') {
        notify(data);
      }
      return send.apply(this, [data]);
    };
    // eslint-disable-next-line @typescript-eslint/unbound-method
  })(window.WebSocket.prototype.send);
};

const wsRequestBodyInterceptor = createInterceptor(injectWsRequestInterceptor);

export default wsRequestBodyInterceptor;
