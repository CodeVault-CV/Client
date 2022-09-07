import { useState } from "react";
import TypeStorage from "../data/infra/TypeStorage";

const createStateStorage = <T>(key: string) => new TypeStorage<T>(key, window.localStorage);

export default function usePersistantState<T>(
  key: string,
  defaultValue: T
): [T, (newState: T) => void] {
  const stateStorage = createStateStorage<T>(key);
  const [state, setState] = useState<T>(stateStorage.get() || defaultValue);

  const setPersistantState = (newState: T) => {
    setState(newState);
    stateStorage.set(newState);
  };

  return [state, setPersistantState];
}
