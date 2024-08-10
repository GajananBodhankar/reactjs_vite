import React, { forwardRef } from "react";

function Child(props, ref) {
  return (
    <div>
      <input
        type="text"
        ref={ref}
        onChange={() => {
          console.log(ref);
        }}
      />
      <button onClick={() => ref?.current.focus()}>Click</button>
    </div>
  );
}

export default forwardRef(Child);
