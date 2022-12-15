enum trackerState {
  PENDING = "PENDING",
  "GRADING.PROCESSING" = "GRADING.PROCESSING",
  "GRADING.IDLE" = "GRADING.IDLE",
  DONE = "DONE"
}
enum trackerEventType {
  START = "START",
  FAIL = "FAIL",
  SUCCESS = "SUCCESS",
  SCORE = "SCORE",
  AFTER = "AFTER"
}
type trackerContext = {
  platform: string,
  problemId: string,
  language: string,
  code: string,
  memory: number,
  time: number,
}
type trackerAction = ((context: trackerContext) => void)[];
type trackerEvent = {
  type: trackerEventType,
  payload?: Partial<trackerContext>
}

export {
  trackerState,
  trackerEventType
};

export type {
  trackerContext,
  trackerAction,
  trackerEvent
};

export default interface iTracker {
  readonly state: trackerState;
  readonly context: trackerContext;
  send: (event: trackerEvent) => void;
}