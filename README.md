# react
# Why React ?
In VanillaJs, Even for a small change in application, the entire DOM is reloaded which often can be a overhead.

1. React uses Virtual DOM which is a light-weight copy of original DOM and updates the only required change rather than updating the entire DOM, which makes development faster and smoother.
2. When navigated from one page to other, in normal html application the entire page is reloaded with the DOM, but in react which uses react-router it just pushes the new component to DOM which prevents reloading the entire DOM.
3. React is component driven, which is easier to maintain and increases the percentage of code reusability.
4. State and props, the former is the one that a component has and it is mutable by the component itself, the latter is something which a component receives as argument and it is not mutable in the component.