import createInterceptor from "../../../core/interceptor";

const injectFetchResponseBodyInterceptor = (notify: (data: string) => void) => {
  (() => {
    const origFetch = window.fetch;
    window.fetch = async (...args) => {
      const res = await origFetch(...args);

      res
        .clone()
        .json()
        .then(data => notify(JSON.stringify(data) as any));

      return res;
    }
  })();
}

const fetchResponseBodyInterceptor = createInterceptor(injectFetchResponseBodyInterceptor);

export default fetchResponseBodyInterceptor;