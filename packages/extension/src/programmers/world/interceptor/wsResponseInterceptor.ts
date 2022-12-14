import createInterceptor from "../../../core/interceptor";

const injectWsResponseInterceptor = (notify: (data: string) => void) => {
  let property = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data") as PropertyDescriptor;
  const data = property.get as () => any;

  function lookAtMessage(this: MessageEvent) { //to replace get function
    const socket = this.currentTarget instanceof WebSocket
    if (!socket) { return data.call(this) }

    const msg = data.call(this);
    Object.defineProperty(this, "data", { value: msg }); //anti-loop
    notify(msg);
    return msg;
  }

  property.get = lookAtMessage
  Object.defineProperty(MessageEvent.prototype, "data", property);
}

const wsResponseBodyInterceptor = createInterceptor(injectWsResponseInterceptor);

export default wsResponseBodyInterceptor;