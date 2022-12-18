type EventContext = {
  target: string;
  type: string;
  payload?: unknown;
};
type EventSender = (event: Omit<EventContext, 'target'>) => void;

export type { EventContext, EventSender };

export default interface iEventHub {
  addHandler: (target: string, sendEvent: EventSender) => this;
  start: () => void;
}
