import React, { useState } from "react";

function Hoc(Component: React.FC<any>) {
  return function () {
    const [count, setCount] = useState(0);
    return <Component count={count} setCount={setCount} />;
  };
}

export default Hoc;
