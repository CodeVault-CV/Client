type eventContext = {
  target: string,
  type: string
  payload?: any
}
type eventSender = (event: Omit<eventContext, "target">) => void; 

export type {
  eventContext,
  eventSender,
}

export default interface iEventHub {
  addHandler: (target: string, sendEvent: eventSender) => this;
  start: () => void;
}