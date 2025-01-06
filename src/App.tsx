// import React, {
//   useState,
//   useCallback,
//   useEffect,
//   useRef,
//   useMemo,
// } from "react";
// import useCustomHook from "./useCustomHook";

// function App() {
//   const [count, setCount] = useState(0);
//   const [bool, setBool] = useState(false);
//   const ref = useRef<any>();
//   // const square = useCallback(() => {
//   //   // console.log("first");
//   //   setBool((prev) => !prev);
//   //   // console.log("in callback");
//   // }, [count]);
//   // useEffect(() => {
//   //   console.log(ref.current == square);
//   //   ref.current = square;
//   // });
//   const square = useCustomHook(() => {
//     console.log("first", count * count);
//   }, [count]);
//   // useEffect(() => {
//   //   console.log(ref.current == square);
//   //   ref.current = square;
//   // });

//   return (
//     <div>
//       <h2
//         ref={ref}
//         onMouseEnter={() => console.log("first")}
//         onMouseLeave={() => console.log("last")}
//       >
//         Count is {count}
//       </h2>
//       {/* <h5>The square is {square}</h5> */}
//       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
//       <button onClick={() => setBool((prev) => !prev)}>Change State</button>
//       <p>{bool ? "true" : "false"}</p>
//       <button onClick={() => square()}>x</button>
//     </div>
//   );
// }

// export default App;

import React, { useCallback, useEffect, useState } from "react";
import { Ref, useRef } from "react";
import useCustomEffect from "./hooks/UseEffect";
import useArray from "./hooks/useArray";
import Parent from "./ForwardRef/Parent";
import ImperativeParent from "./useImperativeHandle/ImperativeParent";
import Unstable from "./unstable_batchedUpdates/Unstable";
import Page from "./Classnames/Page";

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<any>();
  useEffect(() => {
    setHovered(false);
    ref.current.addEventListener("mouseenter", () => {
      setHovered(true);
    });
    ref.current.addEventListener("mouseleave", () => {
      setHovered(false);
    });
    return () => {
      ref.current.removeEventListener("mouseenter", () => {
        setHovered(true);
      });
      ref.current.removeEventListener("mouseleave", () => {
        setHovered(false);
      });
    };
  }, [ref.current]);
  return [ref, hovered];
}

// if you want to try your code on the right panel
// remember to export App() component like below

interface Iobj {
  value: any;
  deps: [];
}

function useCustomCallback(cb: () => any, deps: any) {
  const memoref = useRef<Iobj>();
  // if (!memoref.current || !areEqual(memoref.current.deps, deps)) {
  //   memoref.current = { value: cb, deps };
  // }
  if (
    !memoref.current ||
    JSON.stringify(deps) !== JSON.stringify(memoref.current.deps)
  ) {
    memoref.current = { value: cb, deps };
  }
  return memoref?.current.value;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  const refer = useRef<Function>(null);
  const handleCount = useCustomCallback(
    () => setCount((prev) => prev + 1),
    [count]
  );
  useEffect(() => {
    console.log(refer.current === handleCount);
    refer.current = handleCount;
  });
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleCount}>Increment</button>
      <h3>{bool ? "True" : "False"}</h3>
      <button onClick={() => setBool(!bool)}>Change</button>
    </div>
  );
}
