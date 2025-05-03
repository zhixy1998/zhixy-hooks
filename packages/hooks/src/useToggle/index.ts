import { useMemo, useState } from "react";

export interface ToggleActions<T> {
  toggle: () => void;
  set: (value: T) => void;
  setLeft: () => void;
  setRight: () => void;
}
function useToggle<T = boolean>(): [boolean, ToggleActions<T>];
function useToggle<T>(defaultValue: T): [T, ToggleActions<T>];
function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U
): [T | U, ToggleActions<T>];
function useToggle<D, R>(
  defaultValue: D = (false as unknown) as D,
  reverseValue?: R
) {
  const [state, setState] = useState(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin =
      reverseValue === undefined ? !defaultValue : reverseValue;
    const toggle = () =>
      setState((state) =>
        state === defaultValue ? reverseValueOrigin : defaultValue
      );
    const set = (value: D | R) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    return {
      toggle,
      set,
      setLeft,
      setRight,
    };
  }, []);

  return [state, actions];
}

export default useToggle;
