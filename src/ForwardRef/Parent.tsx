import React, { useRef } from "react";
import Child from "./Child";

function Parent() {
  const ref = useRef();
  // const childRef=useRef()
  return (
    <div>
      I am parent
      {/* here ref is not a prop it is a reference to 
      the dom element, If we want to pass it to Child, we must use forwardRef
      or else change the name of ref to some other like childRef and can use it
        without forwardRef
      */}
      {/* <Child childRef={childRef} */}
      <Child ref={ref} />
    </div>
  );
}

export default Parent;
