// const e = {
//   name: 10,
//   a: function () {
//     setTimeout(() => {
//       console.log(this.name, "99999999999999");
//     });
//   },
//   b: setTimeout(() => {
//     console.log(this.name, "99999999999999");
//   }),
// };
// e.a.call({name: 20});
//------------------------------------------------------------------------
// let obj={
//     name: 10,
//     a: ()=>setTimeout(()=> console.log(this.name))
// }
// function one(){
//     this.name=20;
//     setTimeout(function(){console.log(this.name)})
// }
// let i =new one()
// var name=10
// var cb = () => {
//   console.log(this.name);
// };

// function one(cb) {
//   this.name = "Gajanan";
//   this.cb = function () {
//     cb();
//   };
//   this.caller=cb
// }
// let i = new one(cb);
// i.cb();
// i.caller()
// output - undefined

let obj = {
  name: "gajanan",
};

function one(...args) {
  console.log(this.name, args);
}

function prom1() {
  return new Promise((res, rej) => {
    res(10);
  });
}
function prom2() {
  return new Promise((res, rej) => {
    rej(20);
  });
}
allSettled([prom1(), prom2()]).then((e) => console.log(e));
// function all(promises) {
//   let resArr = [],
//     count = 0;
//   return new Promise((res, rej) => {
//     promises.forEach((i) => {
//       Promise.resolve(i)
//         .then((r) => {
//           resArr.push(r);
//           if (resArr.length == promises.length) {
//             res(resArr);
//           }
//         })
//         .catch((e) => {
//           rej(e);
//         });
//     });
//   });
// }

function allSettled(promises) {
  let prom = [];
  new Promise((res, rej) => {
    prom = promises.map((i) =>
      Promise.resolve(i).then(
        (r) => ({ result: res(r), status: "resolved" }),
        (e) => ({ result: rej(e), status: "Rejected" })
      )
    );
  });
  return Promise.all(prom);
}

var name = "sachin";

function get() {
  name();
  name = "max";
  return 10;
  function name() {
    console.log("first");
  }
}
console.log(name);
get();

const expense = {
  a: [10, 20],
  b: [2, 4],
  c: [5],
};
