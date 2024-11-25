import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import useCustomHook from "./useCustomHook";

function App() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  const ref = useRef();
  // const square = useCallback(() => {
  //   // console.log("first");
  //   setBool((prev) => !prev);
  //   // console.log("in callback");
  // }, [count]);
  // useEffect(() => {
  //   console.log(ref.current == square);
  //   ref.current = square;
  // });
  const square = useCustomHook(() => {
    console.log("first", count * count);
  }, [count]);
  useEffect(() => {
    console.log(ref.current == square);
    ref.current = square;
  });

  return (
    <div>
      <h2>Count is {count}</h2>
      {/* <h5>The square is {square}</h5> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setBool((prev) => !prev)}>Change State</button>
      <p>{bool ? "true" : "false"}</p>
      <button onClick={() => square()}>x</button>
    </div>
  );
}

export default App;
