import createInterceptor from "../../core/interceptor";

declare global {
  interface Window {
    $: any;
  }
}

const injectJqueryResponseBodyInterceptor = (notify: (data: string) => void) => {
  if (!window?.$) new Error("jQuery가 window에 존재하지 않음");

  window.$.ajaxSetup({
    dataFilter: function (data: any) {
      notify(data);
      return data;
    }
  });
}

const interceptJqueryResponseBody = createInterceptor(injectJqueryResponseBodyInterceptor);

export default interceptJqueryResponseBody;