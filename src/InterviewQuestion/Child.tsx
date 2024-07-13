import React, { useEffect } from "react";

function Child() {
  useEffect(() => {
    console.log("child rendered");
  });
  return <p>I am child</p>;
}

export default React.memo(Child);
