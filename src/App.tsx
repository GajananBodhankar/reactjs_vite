"use client";
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

import { use, useCallback, useEffect, useReducer, useRef, useState } from "react";
import BaseComponent from "./BaseComponent";
import Hoc from "./Hoc/Hoc";
import ComponentOne from "./Hoc/ComponentOne";
import ComponentTwo from "./Hoc/ComponentTwo";
import { initialState, reducer } from "./reducer";
import Popover from "./Popover/Popover";

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

export function useTimeout(callback: () => void, delay: number) {
  const time = useRef<number>();
  const callRef = useRef<Function>(callback);

  useEffect(() => {
    callRef.current = callback;
  }, [callback]);

  useEffect(() => {
    time.current = setTimeout(() => callRef.current(), delay);
    return () => {
      clearTimeout(time.current);
    };
  }, [delay]);
  function reset() {
    clear();
    time.current = setTimeout(() => callRef.current(), delay);
  }
  function clear() {
    if (time.current) {
      clearTimeout(time.current);
    }
  }
  return { reset, clear };
}

const calls: Array<any> = [];

import React from "react";
import axios from "axios";
import Form from "./zod/ZodFormComponent";
import ZodFormComponent from "./zod/ZodFormComponent";
import NestedCheckbox from "./NestedCheckbox/NestedCheckbox";
import Main from "./ProductStore/Main";
import DataTable from "./DataTable/DataTable";
import AlertComponent from "./AlertDialog/AlertComponent";

// function App() {
//   const [data, setData] = useState("");
//   useEffect(() => {
//     (async () => {
//       const result = await fetch("http://localhost:3000/read");
//       console.log(result.body);
//       let chunk = "";
//       let text = new TextDecoder();
//       for await (let i of result?.body) {
//         chunk += "";
//         console.log(text.decode(i));
//       }
//     })();
//   }, []);
//   return <div>App {data}</div>;
// }

// export default App;
async function get() {
  try {
    let data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return data.data;
  } catch (error) {}
}
// export default function App(props) {
//   const ref = useRef<any>(null);
//   document.addEventListener("click",e=>console.log(e.target===ref.current))
//   return (
//     <div
//       className="container"
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "red",
//       }}
//     ></div>
//   );
// }

{
  /* <ZodFormComponent  />
<p>{count}</p>
<button onClick={() => setCount((prev) => prev + 1)}>Click</button> */
}
{
  /* <p className="text-3xl">Component update with state</p>
<input
  type="text"
  value={name}
  onFocus={() => setIsSubmitted(false)}
  onChange={(e) => setName(e.target.value)}
  className="w-max border-[1px] p-2 text-xl"
  placeholder="Enter name"
/>
<button className="bg-blue-500 w-max text-white p-2" onClick={() => setIsSubmitted(true)}>
  Submit
</button>
{isSubmitted && <p>The name is {name}</p>} */
}
// const [n, s] = useState(0);
// function get() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   console.log(r.current);
// }
// useEffect(() => {
//   setTimeout(get, 3000);
// }, []);
// const r = useRef<any>(n);
// useEffect(() => {
//   r.current = n;
//   console.log("Parent rendered");
// });
function App() {
  const [name, setName] = useState("");
  useEffect(() => {});
  const ref = useRef<any>("");

  // const req = new XMLHttpRequest();
  // req.open("GET", "http://localhost:3000/read");
  // req.send();
  // req.onloadend = function () {
  //   console.log(req.response, "lorem");
  // };
  const [count, setCount] = useState(0);

  if (count == 1) {
    throw new Error("Error");
  }
  console.log(count);
  return (
    // <div className="container mx-auto pt-3 flex flex-col space-y-2">
    //   <p className="text-3xl">Component update with state</p>
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       ref.current = e.target.value;
    //     }}
    //     className="w-max border-[1px] p-2 text-xl"
    //     placeholder="Enter name"
    //   />
    //   <button
    //     className="bg-blue-500 w-max text-white p-2"
    //     onClick={() => {
    //       setName(ref.current);
    //     }}
    //   >
    //     Submit
    //   </button>
    //   {ref.current && <p>The name is {name}</p>}
    // </div>
    <div>
      {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          if (count == 1) {
            throw new Error("Error");
          }
        }}
      >
        Click
      </button>
    </div>
    // <div style={{height:"200vh"}}>
    // <AlertComponent>
    //   <AlertComponent.Trigger>
    //     <button className="bg-amber-300 mt-1.5">Click</button>
    //   </AlertComponent.Trigger>
    //   <AlertComponent.Content>
    //     <p>
    //       Lorem ipsum dolor sit, amet consectetur
    //     </p>
    //     <AlertComponent.Cancel>
    //       <button className="bg-amber-300">Cancel</button>
    //     </AlertComponent.Cancel>
    //   </AlertComponent.Content>
    // </AlertComponent>
    // </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // used to render the fallback UI once the error is thrown
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Used to log the error information
  componentDidCatch(error, info) {
    console.log(error, "dmasldmjl", info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const WrappedApp = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

export default WrappedApp;
