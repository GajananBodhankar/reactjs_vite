import { useRef } from "react";

const useCustomEffect = (cb: () => void, deps: any) => {
  const firstRender = useRef<any>(true);
  const depsRef = useRef<any>([]);
  // first render
  if (firstRender.current) {
    cb();
    firstRender.current = false;
    return;
  }
  // deps change and no deps array
  const isChanged =
    JSON.stringify(depsRef.current) == JSON.stringify(deps) ? false : true;

  if (isChanged) {
    cb();
  }
  // clean up
  depsRef.current = deps || [];
};

export default useCustomEffect;
