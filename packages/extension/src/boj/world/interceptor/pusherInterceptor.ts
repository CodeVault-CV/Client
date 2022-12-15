import createInterceptor from "../../../core/interceptor";

declare global {
  interface Window {
    pusher?: any;
  }
}

const injectPusherMessageInterceptor = (notify: (data: string) => void) => {
  (() => {
    if (window?.pusher === undefined) throw new Error("pusher가 window에 존재하지 않음");

    const channels = window.pusher.channels.channels;
    Object.keys(channels).forEach(channelName => {
      // Channel에서 listen할 이벤트 타입에 대한 콜백을 bind 한다.
      channels[channelName].bind("update", (data: any) => {
        notify(JSON.stringify(data));
      });
    })
  })();
}

const pusherInterceptor = createInterceptor(injectPusherMessageInterceptor);

export default pusherInterceptor;