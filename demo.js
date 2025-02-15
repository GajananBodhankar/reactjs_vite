class A {
  constructor() {
    this.name = "Gajanan";
  }
  getNameFn() {
    console.log(this.name);
  }

  getNameObj = { data: this.name };
}
let i = new A();
i.getNameFn();
console.log(i.getNameObj);
