import iTracker, { trackerContext, trackerEvent, trackerState } from "./interface";

const initialContext = {
  platform: "",
  problemId: "",
  code: "",
  memory: -Infinity,
  time: -Infinity
}

const createTracker = (handleDone?: (context: trackerContext) => void): iTracker => {
  let state: trackerState = "PENDING";
  let context: trackerContext = {
    ...initialContext
  }
  const timers: number[] = [];

  const eventHandlers = {
    start: (payload: {
      platform: string,
      problemId: string
    }) => {
      if (state !== "PENDING") return;
      state = "GRADING.PROCESSING";

      startGradingTimer();

      context = {
        ...context,
        ...payload
      }
    },
    score: (payload: {
      memory: number,
      time: number
    }) => {
      if (!state.includes("GRADING")) return;
      state = "GRADING.PROCESSING";
      timers.forEach((timer) => clearTimeout(timer));
      
      startGradingTimer();

      context = {
        ...context,
        time: Math.max(context.time, payload.time),
        memory: Math.max(context.memory, payload.memory),
      }
    },
    fail: () => {
      if (!state.includes("GRADING")) return;
      state = "PENDING";
      timers.forEach((timer) => clearTimeout(timer));

      context = {
        ...initialContext
      }
    },
    success: () => {
      if (!state.includes("GRADING")) return;
      state = "DONE";
      timers.forEach((timer) => clearTimeout(timer));

      if (handleDone) {
        handleDone(context);
      }

      setTimeout(() => {
        state = "PENDING";
        context = {
          ...initialContext
        }
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

  const send = (event: trackerEvent) => {
    const { type, payload } = event;

    if (!eventHandlers.hasOwnProperty(type)) return;

    eventHandlers[type](payload);
  }

  return {
    get state() {
      return state;
    },
    get context() {
      return {
        ...context
      }
    },
    send
  }
}

export default createTracker;