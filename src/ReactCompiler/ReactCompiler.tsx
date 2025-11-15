import React, { useState } from "react";

function ReactCompiler() {
  const [state, setState] = useState(0);
  const result = function () {
    console.log("calling function");
    return 2 * 2;
  };
  console.log("child")
  return (
    <div>
      ReactCompiler
      <p>Count is {state} </p>
      <button onClick={() => setState((prev) => prev + 1)}>Increase Count</button>
      <p>result is {result()}</p>
    </div>
  );
}

export default ReactCompiler;
