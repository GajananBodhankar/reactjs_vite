import React, { useEffect, useState } from "react";

function closureFn() {
  let bool = true;
  return function () {
    let temp = bool;
    bool = false;
    return temp;
  };
}
let useIsFirstRender = closureFn();

// Can use useRef() hook as well
// because useRef() will not push a component to render
function FirstRender() {
  const isFirstRender = useIsFirstRender();
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("isFirst Render", isFirstRender);
  });
  return (
    <div>
      This is a component to show FirstRender
      <p>{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>Click</button>
    </div>
  );
}

export default FirstRender;
