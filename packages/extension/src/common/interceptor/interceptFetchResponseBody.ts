import iInterceptor, { interceptListener } from "./interface";

const interceptFetchResponseBody: iInterceptor = ((fetch) => {
  const listeners: interceptListener[] = [];

  const notify = (data: any) => {
    listeners.forEach(listener => listener(data));
  }

  const addListener = (listener: interceptListener) => {
    listeners.push(listener);
  }

  ((fetch) => {
    window.fetch = async (...args) => {
      const res = await fetch(...args);

      res
        .clone()
        .json()
        .then(data => notify(data));

      return res;
    }
  })(window.fetch);

  return {
    addListener
  }
})(window.fetch);

export default interceptFetchResponseBody;