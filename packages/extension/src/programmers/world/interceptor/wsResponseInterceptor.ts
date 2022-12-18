import createInterceptor from '../../../../core/Interceptor';

const injectWsResponseInterceptor = (notify: (data: string) => void) => {
  const property = Object.getOwnPropertyDescriptor(MessageEvent.prototype, 'data') as PropertyDescriptor;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const data = property.get as () => string;

  function lookAtMessage(this: MessageEvent) {
    // to replace get function
    const socket = this.currentTarget instanceof WebSocket;
    if (!socket) {
      return data.call(this);
    }

    const msg = data.call(this);
    Object.defineProperty(this, 'data', { value: msg }); // anti-loop
    notify(msg);
    return msg;
  }

  property.get = lookAtMessage;
  Object.defineProperty(MessageEvent.prototype, 'data', property);
};

const wsResponseBodyInterceptor = createInterceptor(injectWsResponseInterceptor);

export default wsResponseBodyInterceptor;
