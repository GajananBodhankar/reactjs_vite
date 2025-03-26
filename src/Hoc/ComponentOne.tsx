import React from "react";
import Hoc from "./Hoc";

function ComponentOne({ count, setCount }: any) {
  return (
    <div>
      ComponentOne
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default ComponentOne;
