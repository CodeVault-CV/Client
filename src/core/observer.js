let requestingObserver = null;

export const observe = (notify) => {
  requestingObserver = notify;
  notify();
  requestingObserver = null;
};

export const observable = (object) => {
  const observersPerProps = new Map();
  return new Proxy(object, {
    get(target, prop) {
      if (!observersPerProps.has(prop)) observersPerProps.set(prop, new Set());
      if (requestingObserver) observersPerProps.get(prop).add(requestingObserver);
      return target[prop];
    },
    set(target, prop, val) {
      if (target[prop] === val) return true;
      if (JSON.stringify(target[prop]) === JSON.stringify(val)) return true;
      target[prop] = val;
      observersPerProps.get(prop).forEach((notify) => notify());
      return true;
    }
  });
};

