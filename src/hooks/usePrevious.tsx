import React, { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {ref.current = value}, [value]);
  console.log("firstref", ref.current);
  return ref.current;
}

export default usePrevious;
