import React, { useState } from "react";
import Model from "./Model";

function Main() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Click</button>
      <Model show={show} setShow={setShow} />
    </div>
  );
}

export default Main;
