import iInterceptor, { interceptListener } from "./interface"

export type interceptorParam = (notify: (data: any) => void) => void;

const createInterceptor = (inject: interceptorParam): iInterceptor => {
  const listeners: interceptListener[] = [];

  const notify = (data: any) => {
    listeners.forEach(listener => listener(data));
  }

  const addListener = (listener: interceptListener) => {
    listeners.push(listener);
  }

  inject(notify);

  return {
    addListener
  }
}

export default createInterceptor;