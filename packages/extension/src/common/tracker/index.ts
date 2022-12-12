type trackerState = "PENDING" | "GRADING.PROCESSING" | "GRADING.IDLE" | "DONE";
type trackerEventType = "start" | "fail" | "success" | "score";
type trackerEvent = {
  type: trackerEventType,
  payload?: any
}

const createTracker = () => {
  let state: trackerState = "PENDING";
  const timers: number[] = [];

  const eventHandlers = {
    start: (payload: any) => {
      if (state !== "PENDING") return;
      state = "GRADING.PROCESSING";

      startGradingTimer();
    },
    score: () => {
      if (!state.includes("GRADING")) return;
      state = "GRADING.PROCESSING";

      startGradingTimer();
    },
    fail: () => {
      if (!state.includes("GRADING")) return;
      state = "PENDING";
    },
    success: () => {
      if (!state.includes("GRADING")) return;
      state = "DONE";
      
      setTimeout(() => {
        state = "PENDING";
      }, 1000);
    }
  }

  const startGradingTimer = () => {
    const idleTimer = setTimeout(() => {
      state = "GRADING.IDLE";

      const pendingTimer = setTimeout(() => {
        state = "PENDING";
      }, 2000);
      timers.push(pendingTimer);

    }, 2000);

    timers.push(idleTimer);
  }

  const transition = (event: trackerEvent) => {
    const { type, payload } = event;

    if (!eventHandlers.hasOwnProperty(type)) return;
    timers.forEach((timer) => clearTimeout(timer));

    eventHandlers[type](payload);
  }

  return {
    get state() {
      return state;
    },
    transition
  }
}

export default createTracker;