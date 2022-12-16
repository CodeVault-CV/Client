/**
 * World에서 동작하는 네트워크 통신 인터셉터.
 * - inject는 브라우저 기본동작(e.g. fetch, WebSocket)을 변경해 notify를 수행하도록 한다.
 */

import iInterceptor, { interceptListener } from './interface';

export type interceptorParam = (notify: (data: string) => void) => void;

const createInterceptor = (inject: interceptorParam): iInterceptor => {
  const listeners: interceptListener[] = [];

  const notify = (data: string) => {
    listeners.forEach(listener => listener(data));
  };

  const addListener = (listener: interceptListener) => {
    listeners.push(listener);
  };

  inject(notify);

  return {
    addListener,
  };
};

export default createInterceptor;
