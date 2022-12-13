import iInterceptor, { interceptListener } from "./interface"

export type interceptorParam = (notify: (data: string) => void) => void;

const createInterceptor = (inject: interceptorParam): iInterceptor => {
  const listeners: interceptListener[] = [];

  const notify = (data: string) => {
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