const TrackerState = {
  PENDING: 'PENDING',
  'GRADING.PROCESSING': 'GRADING.PROCESSING',
  'GRADING.IDLE': 'GRADING.IDLE',
  DONE: 'DONE',
} as const;
const TrackerEventType = {
  START: 'START',
  FAIL: 'FAIL',
  SUCCESS: 'SUCCESS',
  SCORE: 'SCORE',
  AFTER: 'AFTER',
} as const;
type TrackerEventType = keyof typeof TrackerEventType;
type TrackerState = keyof typeof TrackerState;
type TrackerContext = {
  platform: string;
  problemId: string;
  language: string;
  code: string;
  memory: number;
  time: number;
};
type TrackerAction = ((context: TrackerContext) => void)[];
type TrackerEvent = {
  type: TrackerEventType;
  payload?: Partial<TrackerContext>;
};

export { TrackerState, TrackerEventType };

export type { TrackerContext, TrackerAction, TrackerEvent };

export default interface iTracker {
  readonly state: TrackerState;
  readonly context: TrackerContext;
  send: (event: TrackerEvent) => void;
}
