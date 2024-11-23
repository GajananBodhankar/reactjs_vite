import { useState } from "react";

function useToggle(initialState: boolean = false): [boolean, () => void] {
  const [state, setState] = useState(initialState);
  function toggle() {
    setState((prev: any) => !prev);
  }
  return [state, toggle];
}

export default useToggle;
