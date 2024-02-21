import React, { useCallback, useEffect, useRef, useState } from "react";

function UseCallback() {
  const reference = useRef(null);
  const [val, setVal] = useState(0);
  const [bool, setBool] = useState(false);
  let handler = useCallback(() => {
    setVal(val + 1);
  }, [val]);
  useEffect(() => {
    console.log(reference.current == handler);
    reference.current = handler;
  });
  return (
    <div>
      <button onClick={() => setBool(!bool)}>Change the parent state</button>
      <Helper val={val} handler={handler} ref={reference} />
    </div>
  );
}

function Helper({ val, handler, ref }) {
  return (
    <div ref={ref}>
      <p>{val}</p>
      <button onClick={handler}>handler</button>
    </div>
  );
}

export default UseCallback;
