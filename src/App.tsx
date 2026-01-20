import React, { ReactElement, Ref, RefObject, useEffect, useRef, useState } from "react";
import "./main.css";
import { flushSync } from "react-dom";
import ReactCompiler from "./ReactCompiler/ReactCompiler";
function App() {
  const [name, setName] = useState("");
  const refer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("rendered", refer.current.__reactFiber$jiuw8gqa6s, Object.keys(refer.current));

  });
  return (
    <div ref={refer}>
      App
      {/* <input
        type="text"
        className=""
        value={name}
        onChange={(e) => {
          // flushSync(() => setName(prev=>prev+e.target.value));
          // flushSync(() => setName(prev=>prev+e.target.value));
          setName(prev=>prev+e.target.value);
          setName(prev=>prev+e.target.value)
        }}
      /> */}
      <p>{name}</p>
      <button onClick={() => setName(name.concat(" hi"))}>Change</button>
      <ReactCompiler />
    </div>
  );
}

export default App;
