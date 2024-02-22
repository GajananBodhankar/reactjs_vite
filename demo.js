// function sqaure(num) {
//   console.log("Square executed");
//   return num * num;
// }

// function memo(fn) {
//   let obj = {};
//   return function (input) {
//     if (obj[input]) {
//       return obj[input];
//     } else {
//       obj[input] = fn(input);
//       return obj[input];
//     }
//   };
// }

// let response = memo(sqaure);
// console.log(response(10));
// console.log(response(10));

function frequency(arr) {
  let m = new Map();
  arr.forEach((i) => {
    if (m.has(i)) {
      m.set(i, m.get(i) + 1);
    } else {
      m.set(i, 1);
    }
  });
  console.log(Array.from(m).sort((a, b) => (a[0] > b[0] ? 1 : -1)));
}
frequency(["aman", "aman", "aman", "aa", "aa"]);
