// import React, { useEffect, useRef, useState } from "react";
// function reducer(state = { count: 0 }, action) {
//   switch (action.type) {
//     case "Increment": {
//       return { count: (state.count ?? 0) + 1 };
//     }
//     case "Decrement": {
//       return { count: (state.count ?? 0) - 1 };
//     }
//   }
// }

// function createStore(reducer) {
//   let state = { count: 0 },
//     subscribers = [];
//   function getState() {
//     return state;
//   }
//   function dispatch(action) {
//     state = reducer(state, action);
//     console.log(state);
//     subscribers.forEach((i) => {
//       console.log(i);
//       i(state.count);
//     });
//     console.log(state);
//   }
//   function subscribe(callback) {
//     subscribers.push(callback);
//   }
//   return { getState, dispatch, subscribe };
// }

// const store = createStore(reducer);

// function App() {
//   const state = store.getState();
//   const [count, setCount] = useState(state.count);
//   useEffect(() => {
//     store.subscribe((value) => setCount(value));
//   }, []);

//   return (
//     // <div>
//     //   <button
//     //     onClick={() => {
//     //       store.dispatch({ type: "Increment" });
//     //       // setCount(state.count);
//     //     }}
//     //   >
//     //     increment
//     //   </button>
//     //   <p>{count}</p>
//     // </div>
//     <TrafficLi
//   );
// }

// export default App;

import React from "react";
import TrafficLights from "./TrafficLights/TrafficLights";

function App() {
  return <TrafficLights />;
}

export default App;
