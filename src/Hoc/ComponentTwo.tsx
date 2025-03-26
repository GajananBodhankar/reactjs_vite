import React from "react";
import Hoc from "./Hoc";

function ComponentTwo({ count, setCount }: any) {
  return (
    <div>
      ComponentTwo
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default ComponentTwo;
