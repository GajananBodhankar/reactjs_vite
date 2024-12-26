import React, { useState } from "react";

function Unstable() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  function handleCount() {
    setTimeout(() => {
      setCount(count + 1);
      setBool(!bool);
    });
  }
  console.log("re-rendered");
  return (
    <div>
      Unstable,
      {count}
      {bool ? "true" : "false"}
      <button onClick={handleCount}>Click</button>
    </div>
  );
}

export default Unstable;
