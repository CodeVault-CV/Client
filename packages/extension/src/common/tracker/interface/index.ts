type trackerState = "PENDING" | "GRADING.PROCESSING" | "GRADING.IDLE" | "DONE";
type trackerEventType = "start" | "fail" | "success" | "score";
type trackerContext = {
  platform: string,
  problemId: string,
  code: string,
  memory: number,
  time: number
}
type trackerEvent = {
  type: trackerEventType,
  payload?: any
}

export type {
  trackerState,
  trackerEvent,
  trackerContext
}

export default interface iTracker {
  readonly state: trackerState;
  readonly context: trackerContext;
  transition: (event: trackerEvent) => void;
}