import React, { useCallback, useMemo, useState } from "react";
import useCustomHook from "./useCustomHook";

function App() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  // const square = () => {
  //   console.log("in square");
  //   return count * count;
  // };
  const square = useCustomHook(() => {
    console.log("in square");
    return count * count;
  }, [count]);
  return (
    <div>
      <h2>Count is {count}</h2>
      <h5>The square is {square}</h5>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setBool((prev) => !prev)}>Change State</button>
    </div>
  );
}

export default App;
