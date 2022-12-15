import createInterceptor from "../../../core/interceptor";

declare global {
  interface Window {
    pusher?: any;
  }
}

const injectPusherMessageInterceptor = (notify: (data: string) => void) => {
  (() => {
    if (window?.pusher === undefined) new Error("pusher가 window에 존재하지 않음");

    const channels = window.pusher.channels.channels;
    Object.keys(channels).forEach(channelName => {
      console.log(`listening on channel '${channelName}'`);
      channels[channelName].bind("update", (data: any) => {
        notify(JSON.stringify(data));
      });
    })
  })();
}

const pusherInterceptor = createInterceptor(injectPusherMessageInterceptor);

export default pusherInterceptor;