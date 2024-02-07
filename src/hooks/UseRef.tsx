import React, { useEffect, useRef, useState } from "react";
/*
 * UseRef holds the value assigned to it even after a rerender unlike a normal variable
 */

// function UseRef() {
//   let [val, setVal] = useState(1000);
//   let a = 0;
//   useEffect(() => {
//     console.log("rerendered and a", a);
//   });
//   return (
//     <button
//       onClick={() => {
//         a = a + 1;
//         console.log(a);
//         setVal(val + 100);
//       }}
//     >
//       click
//     </button>
//   );
// }

function UseRef() {
  let [val, setVal] = useState(1000);
  let a = useRef(0);
  useEffect(() => {
    console.log("rerendered and a", a);
  });
  return (
    <button
      onClick={() => {
        a.current = a.current + 1;
        console.log(a);
        setVal(val + 100);
      }}
    >
      click
    </button>
  );
}

export default UseRef;
