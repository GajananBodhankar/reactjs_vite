import React, { useRef, useState } from "react";

function areEqual(prev: string | any[], next: string | any[]) {
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

function useCustomHook(cb: () => any, deps: any) {
  const memoref = useRef<Iobj>();
  if (!memoref.current || !areEqual(memoref.current.deps, deps)) {
    memoref.current = { value: cb, deps };
  }
  return memoref?.current.value;
}

export default useCustomHook;
