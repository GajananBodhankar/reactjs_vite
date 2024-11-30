import { useState } from "react";

const useArray = (
  arr: Array<any>
): [Array<any>, (index: number, element: number) => void] => {
  const [list, setList] = useState(arr);
  const push = (element: any) => {
    setList((prev) => [...prev, element]);
  };
  function update(index: any, element: any) {
    setList((prev) => {
      let result = [...prev];
      result.splice(index, 1, element);
      return result;
    });
  }
  return [list, update];
};

export default useArray;
