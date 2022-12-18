import { eventEmitter } from '../../../core/EventHub';
import createBojTrackerEvent from './createBojTrackerEvent';
import pusherInterceptor from './interceptor/pusherInterceptor';

console.log('CodeVault running...');

pusherInterceptor.addListener(data => {
  eventEmitter.fromWorld({
    target: 'GradeTracker',
    type: 'Boj',
    payload: createBojTrackerEvent(data),
  });
});
