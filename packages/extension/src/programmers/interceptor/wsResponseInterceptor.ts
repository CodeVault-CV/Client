import createInterceptor, { interceptorParam } from "../../common/interceptor";

const injectWsResponseInterceptor = (notify: interceptorParam) => {
  let property = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data") as PropertyDescriptor;
  const data = property.get as () => any;

  function lookAtMessage(this: MessageEvent) { //to replace get function
    let socket = this.currentTarget instanceof WebSocket
    if (!socket) { return data.call(this) }
    let msg = data.call(this);
    Object.defineProperty(this, "data", { value: msg }); //anti-loop
    notify(msg);
    return msg;
  }

  property.get = lookAtMessage
  Object.defineProperty(MessageEvent.prototype, "data", property);
}

const wsResponseBodyInterceptor = createInterceptor(injectWsResponseInterceptor);

export default wsResponseBodyInterceptor;