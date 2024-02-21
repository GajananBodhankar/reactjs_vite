import React, { useMemo, useState } from "react";

function square(num) {
  return num * num;
}

function UseMemo() {
  const [val, setVal] = useState(0);
  let result = useMemo(() => square(val), [val]);
  return (
    <div>
      <p>{result}</p>
      <button onClick={() => setVal(val + 1)}>Click</button>
    </div>
  );
}

export default UseMemo;
