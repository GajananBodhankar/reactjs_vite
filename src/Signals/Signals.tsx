import React, { useEffect } from "react";
import { signal } from "@preact/signals-react";
// Magical, the "rendered" will be consoled
// only once and it will not re-render....
// super performance improvement 
function SignalsComponent() {
  const count = signal(0);
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => (count.value = count.value + 1)}>Increment</button>
      <button onClick={() => (count.value = count.value - 1)}>Decrement</button>
    </div>
  );
}

export default SignalsComponent;
