type eventContext = {
  to: string,
  type: string
  payload?: any
}
type eventSender = (eventContext: Omit<eventContext, "to">) => void; 

export type {
  eventContext,
  eventSender
}

export default interface iEventHub {
  addHandler: (to: string, sendEvent: eventSender) => this;
  start: () => void;
}