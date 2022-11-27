type callback = (params: any) => void;

// Intercept request
function interceptWsRequest(cb: callback) {
  ((send) => {
    window.WebSocket.prototype.send = function (data: string | ArrayBufferLike | Blob | ArrayBufferView) {
      if (typeof data === "string") {
        cb(JSON.parse(data as string));
      }

      return send.apply(this, [data]);
    }
  })(window.WebSocket.prototype.send);
}

// Intercept response
function interceptWsResponse(cb: callback) {
  let property = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data") as PropertyDescriptor;
  const data = property.get as () => any;

  function lookAtMessage(this: MessageEvent) { //to replace get function
    let socket = this.currentTarget instanceof WebSocket
    if (!socket) { return data.call(this) }
    let msg = data.call(this);
    Object.defineProperty(this, "data", { value: msg }); //anti-loop
    cb(msg);
    return msg;
  }

  property.get = lookAtMessage
  Object.defineProperty(MessageEvent.prototype, "data", property);
}

interface iWsInterceptor {
  subscribeResponse: (cb: callback) => this;
  subscribeRequest: (cb: callback) => this;
  start: () => void;
}
export default function createWsInterceptor(): iWsInterceptor {
  const resSubscribers: callback[] = [];
  const reqSubscribers: callback[] = [];

  const notifyRequest = (data: any) => {
    reqSubscribers.forEach(cb => cb(data));
  }
  const notifyResponse = (data: any) => {
    resSubscribers.forEach(cb => cb(data));
  }

  function subscribeRequest(cb: callback) {
    reqSubscribers.push(cb)
    return wsInterceptor;
  }
  function subscribeResponse(cb: callback) {
    resSubscribers.push(cb);
    return wsInterceptor;
  }
  function start() {
    interceptWsRequest(notifyRequest);
    interceptWsResponse(notifyResponse);
  }

  const wsInterceptor = {
    subscribeRequest,
    subscribeResponse,
    start
  }

  return wsInterceptor;
}