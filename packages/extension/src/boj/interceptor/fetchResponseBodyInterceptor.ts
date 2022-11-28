import createInterceptor, { interceptorParam } from "../../common/interceptor";

const injectFetchResponseBodyInterceptor = (notify: interceptorParam) => {
  (() => {
    const origFetch = window.fetch;
    window.fetch = async (...args) => {
      const res = await origFetch(...args);

      res
        .clone()
        .json()
        .then(data => notify(data));

      return res;
    }
  })();
}

const fetchResponseBodyInterceptor = createInterceptor(injectFetchResponseBodyInterceptor);

export default fetchResponseBodyInterceptor;