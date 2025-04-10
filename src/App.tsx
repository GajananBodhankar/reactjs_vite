// // import React, {
// //   useState,
// //   useCallback,
// //   useEffect,
// //   useRef,
// //   useMemo,
// // } from "react";
// // import useCustomHook from "./useCustomHook";

// // function App() {
// //   const [count, setCount] = useState(0);
// //   const [bool, setBool] = useState(false);
// //   const ref = useRef<any>();
// //   // const square = useCallback(() => {
// //   //   // console.log("first");
// //   //   setBool((prev) => !prev);
// //   //   // console.log("in callback");
// //   // }, [count]);
// //   // useEffect(() => {
// //   //   console.log(ref.current == square);
// //   //   ref.current = square;
// //   // });
// //   const square = useCustomHook(() => {
// //     console.log("first", count * count);
// //   }, [count]);
// //   // useEffect(() => {
// //   //   console.log(ref.current == square);
// //   //   ref.current = square;
// //   // });

// //   return (
// //     <div>
// //       <h2
// //         ref={ref}
// //         onMouseEnter={() => console.log("first")}
// //         onMouseLeave={() => console.log("last")}
// //       >
// //         Count is {count}
// //       </h2>
// //       {/* <h5>The square is {square}</h5> */}
// //       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
// //       <button onClick={() => setBool((prev) => !prev)}>Change State</button>
// //       <p>{bool ? "true" : "false"}</p>
// //       <button onClick={() => square()}>x</button>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { Component, useCallback, useEffect, useState } from "react";
// import { Ref, useRef } from "react";
// import useCustomEffect from "./hooks/UseEffect";
// import useArray from "./hooks/useArray";
// import Parent from "./ForwardRef/Parent";
// import ImperativeParent from "./useImperativeHandle/ImperativeParent";
// import Unstable from "./unstable_batchedUpdates/Unstable";
// import Page from "./Classnames/Page";
// import { useTimeout } from "./useTimeout/useTimeout";
// import usePrevious from "./hooks/usePrevious";
// import GridLights from "./GridLights/GridLights";
// import LifecycleThis from "./ClassThis/LifecycleThis";
// import { useNavigate, useNavigation } from "react-router-dom";
// import {refres} from 'react-router'

// export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
//   const [hovered, setHovered] = useState(false);
//   const ref = useRef<any>();
//   useEffect(() => {
//     setHovered(false);
//     ref.current.addEventListener("mouseenter", () => {
//       setHovered(true);
//     });
//     ref.current.addEventListener("mouseleave", () => {
//       setHovered(false);
//     });
//     return () => {
//       ref.current.removeEventListener("mouseenter", () => {
//         setHovered(true);
//       });
//       ref.current.removeEventListener("mouseleave", () => {
//         setHovered(false);
//       });
//     };
//   }, [ref.current]);
//   return [ref, hovered];
// }

// // if you want to try your code on the right panel
// // remember to export App() component like below

// interface Iobj {
//   value: any;
//   deps: [];
// }

// function useCallbackCustom(this: any, cb: () => void, args: Readonly<{}>[]) {
//   let refer = React.createRef.bind<any>(this);
//   if (
//     !refer.current ||
//     JSON.stringify(args) !== JSON.stringify(refer.current?.args)
//   ) {
//     console.log(
//       JSON.stringify(refer?.current?.args),
//       args,
//       "prev",
//       refer.current
//     );
//     refer.current = { value: cb, args };
//     console.log(
//       JSON.stringify(refer?.current?.args),
//       args,
//       "args",
//       refer.current
//     );
//   }
//   return refer?.current?.value;
// }

// function App() {
//   // const timer = useTimeout(()=>console.log("first"),3000);
//   // console.log(timer)
//   // const [count,set]=useState(0)
//   // return <div>App
//   //   <button onClick={()=>set(10)}>click</button>
//   // </div>;
//   // const [c, s] = useState(0);
//   // const prev = usePrevious(c);

//   useEffect(() => {
//     const controller = new AbortController();
//     document.addEventListener(
//       "click",
//       (e) => {
//         console.log("clicked");
//       },
//       { signal: controller.signal }
//     );
//     document.addEventListener("click", (e) => console.log("first"), {
//       signal: controller.signal,
//     });
//     // return () => {
//     // document.removeEventListener("click", (e) => {
//     //   console.log("removed");
//     // });

//     // };
//     controller.abort();
//   }, []);

//   return (
//     // <div>
//     //   {prev}
//     //   <button onClick={() => s(c + 1)}>Click</button>
//     // </div>
//     // <GridLights />
//     // <LifecycleThis/>
//     <div>Hello</div>
//   );
// }

// export default App;

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import BaseComponent from "./BaseComponent";
import Hoc from "./Hoc/Hoc";
import ComponentOne from "./Hoc/ComponentOne";
import ComponentTwo from "./Hoc/ComponentTwo";
import { initialState, reducer } from "./reducer";

const Component = () => {
  const [sum, setSum] = useState(0);
  // useEffect(() => {
  //   const worker = new Worker(new URL("../demo.js", import.meta.url), { type: "module" });
  //   worker.postMessage("message");
  //   worker.addEventListener("message", (e) => {
  //     setSum(e.data);
  //   });
  // }, []);
  const ref = useRef<any>(null);
  const [text, setText] = useState("");
  useEffect(() => {
    return () => {
      // if (ref.current == sum) {
      // }
      console.log("unmounted", ref.current, sum);
      ref.current = sum;
    };
  }, []);
  return <div>Hello Component {sum}</div>;
};
function useCustomEffect(cb: any, args?: Array<any>) {
  let ref = useRef<any>(null);

  if (!ref.current) {
    cb();
  }

  if (JSON.stringify(ref.current) !== JSON.stringify(args) && ref.current) {
    cb();
  }
  ref.current = args;
}

function App() {
  const [sum, setSum] = useState(0);
  const [text, setText] = useState({ name: "gajanan", age: 20 });
  // useCustomEffect(() => {
  //   console.log("first");
  // });
  const ref = useRef<any>();
  function handleClick() {
    console.log(ref.current);
  }
  // useEffect(() => {
  //   ref.current = sum;
  // });
  // useEffect(() => {
  //   let btn = document.querySelector("button");
  //   btn?.addEventListener("click", handleClick);
  //   setTimeout(() => {
  //     // alert(ref.current);
  //   }, 3000);
  // }, []);

  const One = Hoc(ComponentOne);
  const Two = Hoc(ComponentTwo);

  const [state, dispatch] = useReducer(reducer, initialState);
  const handle = useCallback(() => {
    setText((prev) => ({ ...prev, age: prev.age + 1 }));
  }, []);
  const [color, setColor] = useState("green");
  useEffect(() => {
    if (color == "green") {
      handleColor("yellow");
    } else if (color === "yellow") {
      handleColor("red");
    } else {
      handleColor("green");
    }
  }, [color]);
  function handleColor(color: any) {
    switch (color) {
      case "red": {
        setTimeout(() => setColor("red"), 2000);
        break;
      }
      case "yellow": {
        setTimeout(() => setColor("yellow"), 4000);
        break;
      }
      case "green": {
        setTimeout(() => setColor("green"), 4000);
        break;
      }
    }
  }
  return (
    <div>
      <button onClick={handle}>Click</button>
      {/* App
      {sum}
      <p onClick={() => setSum((prev) => prev + 1)}>Click</p>
      <button>Click</button>
      <BaseComponent text={text} setText={setText} /> */}
      <div style={{ height: "100px", width: "100px", backgroundColor: `${color}` }}></div>
    </div>
  );
}

export default App;
