import React, { useEffect } from "react";
import { useRef, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLInputElement | null>();
  useEffect(() => {
    ref.current = document.querySelector("input");
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decremnet</button>
      <button onClick={() => alert(ref.current.value)}>click</button>
      <input type="text" ref={ref} />
    </div>
  );
}

export default App;
