import React, { useRef } from "react";
import Child from "./Child";

function Parent() {
  const ref = useRef();
  return (
    <div>
      I am parent
      <Child ref={ref} />
    </div>
  );
}

export default Parent;
