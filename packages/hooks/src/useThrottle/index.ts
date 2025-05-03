import { useMemo, useState } from "react";

function useThrottle(fn, delay) {
  let lastTime = Date.now();
  return (...args) => {
    if (Date.now() - lastTime > delay) {
      fn.call(this, ...args);
      lastTime = Date.now();
    }
  };
}
export default useThrottle;
