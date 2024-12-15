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

import React, { useEffect, useState } from "react";
import { Ref, useRef } from "react";
import useCustomEffect from "./hooks/UseEffect";
import useArray from "./hooks/useArray";
import Parent from "./ForwardRef/Parent";
import ImperativeParent from "./useImperativeHandle/ImperativeParent";

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

export default function App() {
  // const [ref, isHovered] = useHover<HTMLDivElement>();
  const [refTarget, setRefTarget] = useState<number>(0);
  // useEffect(() => {
  //   console.log(ref?.current, "current");
  // }, [refTarget]);
  const firstRef = useRef<any>(true);
  useCustomEffect(() => {
    console.log(firstRef.current);
    firstRef.current = false;
  }, [refTarget]);
  const [list, update] = useArray([10, 30, 40]);
  useEffect(() => console.log(list));
  return (
    <div>
      {/* <p>{isHovered ? "hovered" : "not hovered"}</p> */}
      {/* <button
        data-testid="change-ref-target-button"
        onClick={() => {
          setRefTarget((target) => target + 1);
          // push(refTarget);
          update(0,5);
        }}
      >
        toggle ref target
      </button> */}
      <ImperativeParent/>
      {/* <div ref={refTarget === 0 ? ref : null} data-testid="hover-target0">
        target 0
      </div>
      <div ref={refTarget === 1 ? ref : null} data-testid="hover-target1">
        target 1
      </div> */}
    </div>
  );
}
