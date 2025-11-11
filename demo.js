// // const join = (a, b, c) => {
// //   return `${a}_${b}_${c}`;
// // };
function curry(fn) {
  return function curried(...args) {
    // if number of arguments match
    if (args.length >= fn.length && args.slice(0, fn.length).every((item) => item !== curry.placeholder)) {
      return fn.call(this, ...args);
    }
    // otherwise return a function which merges the args
    return function (...nextArgs) {
      const mappedArgsTo = args.map((item) =>
        item === curry.placeholder && nextArgs.length ? nextArgs.shift() : item
      );
      return curried.call(this, ...mappedArgsTo, ...nextArgs);
    };
  };
}
curry.placeholder = Symbol();

// // let result = curry(join);
// // console.log(result(_, _, _)(1)(_, 3)(2));
// 1 2 3
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
//============================================================================================================
// const obj = {
//   a: [10, 20, 30],
// };
// const obj2 = { a: [10, 20, 30] };

// function deepEqual(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   }
//   let key1 = Object.keys(obj1),
//     key2 = Object.keys(obj2);
//   return key1.every((key) => deepEqual(obj1[key], obj2[key]));
// }

// console.log(deepEqual(obj, obj2));

//==============================================================================================================================

// function chunkArray(arr, n) {
//   // Your implementation
//   if (!arr) {
//     return [];
//   }
//   if (n > arr.length) {
//     return arr;
//   }
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//       result.push([arr[i]]);
//     } else if (i % n) {
//       result[result.length - 1] = [...result[result.length - 1], arr[i]];
//     } else {
//       result.push([arr[i]]);
//     }
//   }
//   return arr.length == 0 ? arr : result;
// }

// console.log(chunkArray());

// function removeDuplicates(arr) {
//   // your code here
//   const obj = new Map(),
//   result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj.has(arr[i])) {
//       result.push(arr[i]);
//     }

//     obj.set(arr[i], true);
//   }
//   return result;
// }
// // console.log(removeDuplicates([1, "1", 1]));
// console.log(removeDuplicates([{}, {}, []]));

//==============================================================================================================================

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

// function getData(data) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i]?.children) {
//       data[i].checked=false
//       getData(data[i].children);
//     } else {
//       data[i].checked = false;
//     }
//   }
//   return data;
// }
const das = { [5]: true, [6]: true };
function getParent(data, item) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == item) {
      return data[i];
    }
    if (data[i]?.children) {
      const result = getParent(data[i].children, item);
      if (result) console.log(data[i]);
      // const check = data[i].children.every((ele) => {
      //   return das[`${ele.id}`];
      // });
      // if (check) {
      // console.log(data[i]);
      // }
    }
  }
}

// console.log(getParent(CheckboxesData, 9));

//==============================================================================================================================

const arr = [
  [1, 1, 1],
  [0, 0, 0],
  [1, 1, 1],
];

/**
 * chat gpt solution
 * @param {*} arr
 * @returns count
 */
// function get(arr) {
//   let region = 0,
//     map = new Map();
//   const n = arr.length,
//     m = arr[0].length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (arr[i][j] == 1 && !map.has(`${i}-${j}`)) {
//         check(i, j);
//         region++;
//       }
//     }
//   }
//   function check(i, j) {
//     if (i < 0 || j < 0 || i >= n || j >= m || arr[i][j] == 0 || map.has(`${i}-${j}`)) {
//       return;
//     }
//     map.set(`${i}-${j}`, true);
//     check(i, j - 1);
//     check(i, j + 1);
//     check(i - 1, j);
//     check(i + 1, j);
//   }
//   return region;
// }
/**
 * Own solution
 * @param {*} arr
 * @returns
 */
// function get(arr) {
//   let m = new Map(),
//     p = arr.length,
//     q = arr[0].length,
//     count = 0;
//   for (let i = 0; i < p; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] == 1 && check(arr, i, j, m)) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// function check(arr, i, j, m) {
//   if (i < 0 || j < 0 || i >= arr.length || j >= arr[0].length || arr[i][j] == 0 || m.has(`${i}-${j}`)) {
//     return false;
//   }
//   m.set(`${i}-${j}`, true);
//   check(arr, i - 1, j, m);
//   check(arr, i + 1, j, m);
//   check(arr, i, j - 1, m);
//   check(arr, i, j + 1, m);
//   return true;
// }

// get(arr);
// console.log(get(arr));

//==============================================================================================================================

// const str = "zza";
// const str = "bdda";
// // const str = "bac";
// const str = "bydizfve";
// var robotWithString = function (s) {
//   let p = [],
//     t = [],
//     minChar = [];
//   for (let i = 0; i < s.length; i++) {
//     minChar.push(min(str, i));
//   }
//   console.log(minChar);
//   for (let i = 0; i < s.length; i++) {
//     t.push(s[i]);
//     const min = i+1<s.length? minChar[i+1]: s[i];
//     while (t.at(-1) && t.at(-1) <= min) {
//       p.push(t.pop());
//     }
//   }
//   while (t.length) {
//     p.push(t.pop());
//   }
//   return p;
// };

// function min(str, index) {
//   let item = "";
//   for (let i = index; i < str.length; i++) {
//     if (!item) {
//       item = str[i];
//     } else if (str[i] < item) {
//       item = str[i];
//     }
//   }
//   return item;
// }

// console.log(robotWithString(str));

// ======··============================================================
class SingleTon {
  constructor() {}
  static getInstance() {
    return new SingleTon();
  }
}

console.log(SingleTon.getInstance());

const obj = {
  name: "gajanan",
  show: function () {
    return () => console.log(this?.name);
  },
};

let res = obj.show;
let data = res()();

function One() {
  let a = 10;
  function two() {
    console.log("first");
  }
  function three() {
    console.log("first");
  }
  return three;
}
let x = One();
console.dir(x);
//===============================================

// var mod = 10;
// let object = { name: "Gajanan" };

// let gc = new WeakRef(object);

// let fr = new FinalizationRegistry((value) => console.log(`${value} has been cleared`));
// fr.register(object, JSON.stringify(object));
// object = null;

// function first() {
//   this.name = "Gajanan";
// }

// function second() {
//   console.log(this.name);
// }

// second.prototype = new first();
// let s = new second();

// function getData(a, b, c) {
//   return {
//     name: a,
//     address: b,
//     age: c,
//     yob,
//   };
// }
// function yob() {
//   return new Date().getFullYear()-this.age;
// }
// console.log(getData("gajanan", "Nanded", 24).yob== getData("gajanan", "Nanded", 24).yob);

//==============================================================================================

// let registry = {},
//   id = 0;
// function customTimer(callback, timer) {
//   let curr = new Date().getTime();
//   id++;
//   registry[id] = { callback, timer: curr + timer, initial: timer };
//   executeTimer();
//   return id;
// }

// function executeTimer() {
//   Object.entries(registry).forEach(([id, { callback, timer, initial }]) => {
//     let curr = new Date().getTime();
//     if (curr >= timer) {
//       callback();
//       registry[id].timer = timer + initial;
//     }
//   });
//   requestIdleCallback(executeTimer);
// }

// customTimer(() => console.log(0), 2000);

//==============================================================================================