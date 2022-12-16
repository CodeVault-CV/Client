import { eventEmitter } from '../../core/eventHub';
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
