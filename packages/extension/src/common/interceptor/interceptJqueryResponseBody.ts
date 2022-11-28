import iInterceptor, { interceptListener } from "./interface";

declare global {
  interface Window {
    $: any;
  }
}
const interceptJqueryResponseBody: iInterceptor = (() => {
  const listeners: interceptListener[] = [];

  const notify = (data: any) => {
    listeners.forEach(listener => listener(data));
  }

  const addListener = (listener: interceptListener) => {
    listeners.push(listener);
  }

  if (window?.$) {
    window.$.ajaxSetup({
      dataFilter: function (data: string) {
        notify(data);
        return data;
      }
    });
  }

  return {
    addListener
  }
})();

export default interceptJqueryResponseBody;