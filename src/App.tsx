import React, { useEffect, useState } from "react";
import "./main.css";
import { flushSync } from "react-dom";
import ReactCompiler from "./ReactCompiler/ReactCompiler";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <div>
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
      <button onClick={()=>setName(name.concat(" hi"))}>Change</button>
      <ReactCompiler/>
    </div>
  );
}

export default App;
