// // const join = (a, b, c) => {
// //   return `${a}_${b}_${c}`;
// // };

// // let _ = curry.placeholder;
// // function curry(fn) {
// //   return function curried(...args) {
// //     if (fn.length <= args.length && !args.includes(_)) {
// //       return fn(...args);
// //     } else {
// //       return function (...arg2) {
// //         console.log(args, arg2);
// //         return curried.apply(this, args.concat(arg2));
// //       };
// //     }
// //   };
// // }
// // curry.placeholder = Symbol();

// // let result = curry(join);
// // console.log(result(_, _, _)(1)(_, 3)(2));

// // function check() {
// //   throw new Error("Pass an argument");
// // }

// // function getData(arg = check()) {
// //   console.log(arg);
// // }

// // getData(null);
// // let arr = [10, 20, 30];
// // arr.push()

// // function Prom1() {
// //   return new Promise((res, rej) => {
// //     res(10);
// //   });
// // }
// // function Prom2() {
// //   return new Promise((res, rej) => {
// //     rej(20);
// //   });
// // }

// // function all(promises) {
// //   let resCount = [],
// //     rejCount = false;
// //   return new Promise((res, rej) => {});
// // }

// // all([Prom1(), Prom2()])
// //   .then((e) => console.log(e))
// //   .catch((e) => console.log(e));

// let arr = Array.from(new Array(64).keys());
// console.log(arr);
// get(42);
// function get(num) {
//   let count = num,
//     arr = [];
//   for (let i = 0; i < 16; i++) {
//     count = count + 9;
//     if (count < 64) {
//       arr.push(count);
//       if (count >= 0) {
//         arr.push(count - num);
//       }
//     }
//   }
//   // return [];
//   console.log(arr);
// }

// class A {
//   constructor() {
//     this.name = "Gajanan";
//   }
//   getNameFn() {
//     console.log(this.name);
//   }

//   getNameObj = { data: this.name };
// }
// let i = new A();
// i.getNameFn();
// console.log(i.getNameObj);

/**
 *
 */
// onmessage = function (event) {
//   let sum = 0;
//   for (let i = 0; i < 10000000000; i++) {
//     sum += i;
//   }
//   postMessage(sum);
// };
// let val1 = { name: "gajanan" };
// let val2 = { name: "gajanan" };
// console.log(Object.is("hello","hello"));

const obj = {
  a: [10, 20, 30],
};
const obj2 = { a: [10, 20, 30] };

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  let key1 = Object.keys(obj1),
    key2 = Object.keys(obj2);
  return key1.every((key) => deepEqual(obj1[key], obj2[key]));
}

console.log(deepEqual(obj, obj2));
