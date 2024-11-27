import React, { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number) {
  // your code here
  let ref = useRef<any>();
  let cbref = useRef<any>();
  useEffect(() => {
    ref.current = callback;
  }, [callback]);
  useEffect(() => {
    cbref.current = setTimeout(() => {
      ref.current();
    }, delay);
    return () => clearTimeout(cbref.current);
  }, [delay]);

  return cbref.current;
}
