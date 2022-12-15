import createAjaxInterceptor from "./ajaxInterceptor";

console.log("CodeVault running...");

function onIntercept(data: any) {
  postMessage(data);
}

const ajaxInterceptor = createAjaxInterceptor();
ajaxInterceptor
  .onResponse(onIntercept)
  .onRequest(onIntercept)
  .start();

// Override the Pusher library
declare global {
  interface Window {
    pusher?: any;
  }
}
(() => {
  if (window?.pusher === undefined) new Error("pusher가 window에 존재하지 않음");

  const channels = window.pusher.channels.channels;
  Object.keys(channels).forEach(channelName => {
    console.log(`listening on channel '${channelName}'`);
    channels[channelName].bind("update", (data: any) => {
      console.log(`From channel '${channelName}': ` + data);
    });
  })
})();
