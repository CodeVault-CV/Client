type trackerState = "IDLE" | "GRADING" | "DONE";
type trackerEventType = "start" | "fail" | "success" | "score";
type trackerEvent = {
  type: trackerEventType,
  payload?: any
}

const createTracker = () => {
  let state: trackerState = "IDLE";

  const transition = (event: trackerEvent) => {
    const { type, payload } = event;
    switch (type) {
      case "start":
        if (state === "IDLE") {
          state = "GRADING";
        }
        break;
      case "score":
        if (state === "GRADING") {
          state = "GRADING";
        }
        break;
      case "fail":
        if (state === "GRADING") {
          state = "IDLE";
        }
        break;
      case "success":
        if(state === "GRADING") {
          state = "DONE";
          setTimeout(() => {
            state = "IDLE";
          }, 1000);
        }
        break;
    }
  }

  return {
    get state() {
      return state;
    },
    transition
  }
}

export default createTracker;