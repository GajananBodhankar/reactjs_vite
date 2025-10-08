import React, { useEffect, useState } from "react";
import "./main.css";
import { flushSync } from "react-dom";
function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <div>
      App
      <input
        type="text"
        className=""
        value={name}
        onChange={(e) => {
          // flushSync(() => setName(prev=>prev+e.target.value));
          // flushSync(() => setName(prev=>prev+e.target.value));
          setName(prev=>prev+e.target.value);
          setName(prev=>prev+e.target.value)
        }}
      />
    </div>
  );
}

export default App;
