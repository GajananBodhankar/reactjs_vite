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

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// ===>

[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

async function transpose(mat) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {
    let temp = [];
    for (let j = 0; j < mat.length; j++) {
      temp.push(mat[j][i]);
    }
    arr.push(temp.reverse());
  }
  console.log(arr);
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  // return data;
  console.log(data);
}

transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
