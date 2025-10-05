import React, { useEffect, useState } from "react";

function UseDeferredValue() {
  const [count, setCount] = useState(0);
  const worker = new Worker(new URL("./worker.ts", import.meta.url));
  useEffect(() => {
    worker.postMessage("hi")
    worker.onmessage = function (e) {
      console.log(e);
    };
  }, [count]);
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}

export default UseDeferredValue;
