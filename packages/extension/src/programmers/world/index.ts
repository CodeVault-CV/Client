import wsResponseBodyInterceptor from './interceptor/wsResponseInterceptor';
import wsRequestBodyInterceptor from './interceptor/wsRequestInterceptor';
import createProgrammersTrackerEvent from './createProgrammersTrackerEvent';
import { eventEmitter } from '../../../core/EventHub';

console.log('CodeVault running...');

const interceptHandler = (data: string) => {
  try {
    const programmersTrackerEvent = createProgrammersTrackerEvent(data);
    if (programmersTrackerEvent === null) return;

    eventEmitter.fromWorld({
      target: 'GradeTracker',
      type: 'Programmers',
      payload: programmersTrackerEvent,
    });
  } catch (e) {
    console.error(e);
  }
};

wsResponseBodyInterceptor.addListener(interceptHandler);
wsRequestBodyInterceptor.addListener(interceptHandler);
