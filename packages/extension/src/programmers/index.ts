import createWsInterceptor from "./wsInterceptor";

const wsInterceptor = createWsInterceptor();
wsInterceptor
  .subscribeResponse((data: any) => console.log(data))
  .start();

// Intercept request
// ((send) => {
//   window.WebSocket.prototype.send = function (data: string | ArrayBufferLike | Blob | ArrayBufferView) {
//     if (typeof data === "string") {
//       console.log(JSON.parse(data as string));
//     }

//     return send.apply(this, [data]);
//   }
// })(window.WebSocket.prototype.send)

// // Intercept response
// function listen(fn: (params: any) => void) {
//   fn = fn || console.log;

//   let property = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data") as PropertyDescriptor;
//   const data = property.get as () => any;

//   function lookAtMessage(this: MessageEvent) { //to replace get function
//     let socket = this.currentTarget instanceof WebSocket
//     if (!socket) { return data.call(this) }
//     let msg = data.call(this);
//     Object.defineProperty(this, "data", { value: msg }); //anti-loop
//     fn({ data: msg, socket: this.currentTarget, event: this });
//     return msg;
//   }

//   property.get = lookAtMessage
//   Object.defineProperty(MessageEvent.prototype, "data", property);
// }

// listen(({ data }) => console.log(JSON.parse(data)));
