import { useEffect, useRef } from "react";

const useDebounce = (fn, ms = 30, deps = []) => {
  let timer = useRef();
  useEffect(() => {
    if (timer.current) {
      console.log(`current exist`);
      clearTimeout(timer);
    }
    timer.current = setTimeout(() => {
      fn();
    }, ms);
  }, deps);
  const cancel = () => {
    clearTimeout(timer.current);
    timer = null;
  };
  return [cancel];
};
export default useDebounce;
