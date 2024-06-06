function sqaure(num) {
  console.log("Square executed");
  return num * num;
}

function memo(fn) {
  let obj = {};
  return function (input) {
    if (obj[input]) {
      return obj[input];
    } else {
      obj[input] = fn(input);
      return obj[input];
    }
  };
}

let response = memo(sqaure);
console.log(response(10));
console.log(response(10));

check();
// Hoisting
function check() {
  console.log("hello");
}
