import React, { useEffect, useState } from "react";

function WithReactMemo({children}) {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("parent rendered");
  });
  return (
    <div>
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        Click
      </button>
      {/* <Child name={"Gajanan"} /> */}
      {children}
    </div>
  );
}



export default WithReactMemo;
