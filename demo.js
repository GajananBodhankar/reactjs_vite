// const join = (a, b, c) => {
//   return `${a}_${b}_${c}`;
// };

// let _ = curry.placeholder;
// function curry(fn) {
//   return function curried(...args) {
//     if (fn.length <= args.length && !args.includes(_)) {
//       return fn(...args);
//     } else {
//       return function (...arg2) {
//         console.log(args, arg2);
//         return curried.apply(this, args.concat(arg2));
//       };
//     }
//   };
// }
// curry.placeholder = Symbol();

// let result = curry(join);
// console.log(result(_, _, _)(1)(_, 3)(2));

function check() {
  throw new Error("Pass an argument");
}

function getData(arg = check()) {
  console.log(arg);
}

getData(null);
let arr = [10, 20, 30];
arr.push()
