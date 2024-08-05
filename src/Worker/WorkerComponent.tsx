import React, { useState } from "react";

let worker = new Worker(new URL("./worker.ts", import.meta.url));
function TestComponent() {
  const [count, setCount] = useState(0);
  // hence we send such heavy take which block the main thread
  // to a worker thread
//   let c=0
//     while(c<10000000000){
//       c++
//     }
  worker.postMessage("Trigger worker message");
  worker.onmessage = function (e) {
    setCount(e.data);
  };
  return (
    <div>
      <p>I am test component and my value is {count}</p>
    </div>
  );
}

function WorkerComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>I am worker component {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <TestComponent />
    </div>
  );
}

export default WorkerComponent;
