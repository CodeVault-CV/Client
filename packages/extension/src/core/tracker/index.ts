import iTracker, { trackerEventType, trackerAction, trackerState, trackerContext, trackerEvent } from "./interface/index";

const stateChart = new Map<trackerState, Map<trackerEventType, trackerState>>([
  [trackerState.PENDING, new Map<trackerEventType, trackerState>([
    [trackerEventType.START, trackerState["GRADING.PROCESSING"]]
  ])],
  [trackerState["GRADING.PROCESSING"], new Map<trackerEventType, trackerState>([
    [trackerEventType.AFTER, trackerState["GRADING.IDLE"]],
    [trackerEventType.START, trackerState["GRADING.PROCESSING"]],
    [trackerEventType.SCORE, trackerState["GRADING.PROCESSING"]],
    [trackerEventType.FAIL, trackerState.PENDING],
    [trackerEventType.SUCCESS, trackerState.DONE],
  ])],
  [trackerState["GRADING.IDLE"], new Map<trackerEventType, trackerState>([
    [trackerEventType.AFTER, trackerState.PENDING],
    [trackerEventType.START, trackerState["GRADING.PROCESSING"]],
    [trackerEventType.SCORE, trackerState["GRADING.PROCESSING"]],
    [trackerEventType.FAIL, trackerState.PENDING],
    [trackerEventType.SUCCESS, trackerState.DONE],
  ])],
  [trackerState.DONE, new Map<trackerEventType, trackerState>([
    [trackerEventType.AFTER, trackerState.PENDING]
  ])],
]);

const initialContext = {
  platform: "",
  problemId: "",
  code: "",
  memory: -Infinity,
  time: -Infinity
}

const createTrackerFSM = (actions?: Map<trackerState, trackerAction>): iTracker => {
  let state: trackerState = trackerState.PENDING;
  let context: trackerContext = { ...initialContext };
  let afterTimer: null | number = null;

  function clearTimer() {
    if (afterTimer) {
      clearTimeout(afterTimer);
      afterTimer = null;
    }
  }

  /**
   * 현재 상태와 이벤트 타입에 따라 Tracker의 상태를 변경한다.
   * 1. 상태를 다음 상태로 전이한다.
   * 2. 이전에 등록된 after를 제거한다.
   * 3. 전이된 상태가 after 이벤트를 처리한다면 after 타이머를 시작한다.
   * 4. 전이된 상태가 가지는 action들을 실행한다.
   */
  function transition(event: trackerEvent) {
    const nextState = stateChart.get(state)?.get(event.type);
    // 에러 발생시 Tracker 초기화
    if (nextState === undefined) {
      throw new Error(`Invalid event type '${event.type}' emitted on state '${state}'`);
    }


    // 이전에 등록된 after를 초기화한다.
    // 다음 상태에 after 이벤트가 존재하면 after Timer를 실행한다.
    clearTimer();
    if (stateChart.get(nextState)?.has(trackerEventType.AFTER)) {
      afterTimer = setTimeout(() => transition({ type: trackerEventType.AFTER }), 2000);
    }

    // 다음 상태에 등록된 action들을 실행한다.
    if (actions) {
      actions.get(nextState)?.forEach(action => action(context));
    }

    // 현재 상테와 이벤트에 따라 context를 업데이트한다.
    updateContext(event);

    // 상태를 다음 상태로 전이한다.
    state = nextState;
  }

  function updateContext({ type, payload }: trackerEvent) {
    switch (type) {
      case trackerEventType.START:
        context = {
          ...initialContext,
          ...payload
        }
        break;
      case trackerEventType.AFTER:
        if (state !== trackerState.DONE) return;
      case trackerEventType.FAIL:
        context = {
          ...initialContext
        }
        break;
      default:
        let { time, memory } = context;
        time = Math.max(time, payload?.time ?? 0);
        memory = Math.max(memory, payload?.memory ?? 0);

        context = {
          ...context,
          ...payload,
          time,
          memory,
        }
    }
  }

  function reset() {
    state = trackerState.PENDING;
    context = { ...initialContext };
    clearTimer();
  }

  return {
    get state() {
      return state;
    },
    get context() {
      return { ...context };
    },
    send: transition,
    reset
  }
}

export default createTrackerFSM;