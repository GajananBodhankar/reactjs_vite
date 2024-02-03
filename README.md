# react

# Why React ?

In VanillaJs, Even for a small change in application, the entire DOM is reloaded which often can be a overhead.

1. React uses Virtual DOM which is a light-weight copy of original DOM and updates the only required change rather than updating the entire DOM, which makes development faster and smoother.
2. When navigated from one page to other, in normal html application the entire page is reloaded with the DOM, but in react which uses react-router it just pushes the new component to DOM which prevents reloading the entire DOM.
3. React is component driven, which is easier to maintain and increases the percentage of code reusability.
4. State and props, the former is the one that a component has and it is mutable by the component itself, the latter is something which a component receives as argument and it is not mutable in the component.

# Easy to use

Without React, in the below code which is a counter application, a developer need to listen two events and then store the textContent in a variable and the modify it and assign the updated value.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <p id="Counter">0</p>
      <button id="increment">Increment</button>
      <button id="decrement">Decrement</button>
    </div>
  </body>
  <script>
    let count = document.querySelector("#Counter");
    let increment = document.querySelector("#increment");
    let decrement = document.querySelector("#decrement");

    increment.addEventListener("click", () => {
      let num = count.textContent;
      count.textContent = +num + 1;
    });
    decrement.addEventListener("click", () => {
      let num = count.textContent;
      count.textContent = +num - 1;
    });
  </script>
</html>
```
``With react class component. We are using state.``

```
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
      </div>
    );
  }
}
export default App;

```
``Previously react had only one stateful component which is a class component, but as it evolved now, it has a functional component in which we can use hooks to make functional component work link class component.``

```
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;

```

- It is always better to create react app with Vite, enter this command in terminal ``npm create vite@latest`` and select ``react`` with arrow keys.
- Once app is created enter ``npm i`` or ``npm install``
- Lastly run ``npm run dev``

