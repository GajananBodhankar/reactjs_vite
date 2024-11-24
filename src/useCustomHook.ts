import React, { useRef, useState } from "react";

function areEqual(prev, next) {
  if (prev.length != next.length) return false;
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] != next[i]) {
      return false;
    }
  }
  return true;
}

interface Iobj {
  value: any;
  deps: [];
}

function useCustomHook(cb, deps) {
  //   const memoref = useRef<Iobj>();
  const [memoref, set] = useState<any>();
  if (!memoref || !areEqual(memoref.deps, deps)) {
    set({ value: cb(), deps });
  }
  return memoref?.value ;
}

export default useCustomHook;
