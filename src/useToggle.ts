// import { useState } from "react";

// function useToggle(initialState: boolean = false): [boolean, () => void] {
//   const [state, setState] = useState(initialState);
//   function toggle() {
//     setState((prev: any) => !prev);
//   }
//   return [state, toggle];
// }

// export default useToggle;

class A{
  getData(){
    console.log(10)
  }
}
class B extends A{
  getData(): void {
      console.log(20)
  }
  getResult(){
    this.getData();
    super.getData()
  }
}

let i=new B();
i.getResult()