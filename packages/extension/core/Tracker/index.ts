//
// Background에서 동작하는 채점 추적기인 Tracker
//

import iTracker, {
  TrackerEventType,
  TrackerAction,
  TrackerState,
  TrackerContext,
  TrackerEvent,
} from './interface/index';

const stateChart = new Map<TrackerState, Map<TrackerEventType, TrackerState>>([
  [
    TrackerState.PENDING,
    new Map<TrackerEventType, TrackerState>([[TrackerEventType.START, TrackerState['GRADING.PROCESSING']]]),
  ],
  [
    TrackerState['GRADING.PROCESSING'],
    new Map<TrackerEventType, TrackerState>([
      [TrackerEventType.AFTER, TrackerState['GRADING.IDLE']],
      [TrackerEventType.START, TrackerState['GRADING.PROCESSING']],
      [TrackerEventType.SCORE, TrackerState['GRADING.PROCESSING']],
      [TrackerEventType.FAIL, TrackerState.PENDING],
      [TrackerEventType.SUCCESS, TrackerState.DONE],
    ]),
  ],
  [
    TrackerState['GRADING.IDLE'],
    new Map<TrackerEventType, TrackerState>([
      [TrackerEventType.AFTER, TrackerState.PENDING],
      [TrackerEventType.START, TrackerState['GRADING.PROCESSING']],
      [TrackerEventType.SCORE, TrackerState['GRADING.PROCESSING']],
      [TrackerEventType.FAIL, TrackerState.PENDING],
      [TrackerEventType.SUCCESS, TrackerState.DONE],
    ]),
  ],
  [TrackerState.DONE, new Map<TrackerEventType, TrackerState>([[TrackerEventType.AFTER, TrackerState.PENDING]])],
]);

const initialContext = {
  platform: '',
  problemId: '',
  code: '',
  language: '',
  memory: -Infinity,
  time: -Infinity,
};

const createTrackerFSM = (actions?: Map<TrackerState, TrackerAction>): iTracker => {
  let state: TrackerState = TrackerState.PENDING;
  let context: TrackerContext = { ...initialContext };
  let afterTimer: null | number = null;

  function clearTimer() {
    if (afterTimer) {
      clearTimeout(afterTimer);
      afterTimer = null;
    }
  }

  function updateContext({ type, payload }: TrackerEvent) {
    let { time, memory } = context;
    time = Math.max(time, payload?.time ?? 0);
    memory = Math.max(memory, payload?.memory ?? 0);

    switch (type) {
      case TrackerEventType.START:
        context = {
          ...initialContext,
          ...payload,
        };
        break;
      case TrackerEventType.AFTER:
        if (state === TrackerState.DONE) {
          context = {
            ...initialContext,
          };
        }
        break;
      case TrackerEventType.FAIL:
        context = {
          ...initialContext,
        };
        break;
      default:
        context = {
          ...context,
          ...payload,
          time,
          memory,
        };
    }
  }

  /**
   * 현재 상태와 이벤트 타입에 따라 Tracker의 상태를 변경한다.
   * 1. 이전에 등록된 after를 제거한다.
   * 2. 다음 상태가 after 이벤트를 처리한다면 after 타이머를 시작한다.
   * 3. 상태를 다음 상태로 전이한다.
   * 4. 다음 상태가 가지는 action들을 실행한다.
   */
  function transition(event: TrackerEvent) {
    const nextState = stateChart.get(state)?.get(event.type);
    if (nextState === undefined) {
      console.error(`Invalid event type '${event.type}' emitted on state '${state}'`);
      return;
    }

    // 이전에 등록된 after를 초기화한다.
    // 다음 상태에 after 이벤트가 존재하면 after Timer를 실행한다.
    clearTimer();
    if (stateChart.get(nextState)?.has(TrackerEventType.AFTER)) {
      afterTimer = setTimeout(() => transition({ type: TrackerEventType.AFTER }), 2000);
    }

    // 현재 상테와 이벤트에 따라 context를 업데이트한다.
    updateContext(event);

    // 상태를 다음 상태로 전이한다.
    state = nextState;

    // 다음 상태에 등록된 action들을 실행한다.
    if (actions) {
      actions.get(nextState)?.forEach(action => action(context));
    }
  }

  return {
    get state() {
      return state;
    },
    get context() {
      return { ...context };
    },
    send: transition,
  };
};

export default createTrackerFSM;
