import React, { useCallback } from "react";
interface Icell {
  item: any;
  ind: number;
  index: Array<number>;
  arr: Array<Object>;
  setArr: (arg0: any) => void;
  setIndex: (arg0: any) => void;
  setFlag: (arg0: any) => void;
}

function Cell({ item, ind, index, arr, setArr, setIndex, setFlag }: Icell) {
  const handleClick = useCallback(() => {
    setArr((prev: Array<any>) => {
      let result = [...prev];
      result[ind].isClicked = !result[ind].isClicked;
      // if the index clicked is turn to green color
      // i.e if it is clicked then add it to the indexArray
      // else just remove the index clicked from the index array
      setIndex(
        result[ind].isClicked
          ? [...index, ind]
          : (prev: Array<number>) => prev.filter((ele) => ele != ind)
      );
      return result;
    });
    if (index.length + 2 == arr.length) {
      setFlag(true);
    }
  }, [arr, index]);

  return (
    <div
      className="items"
      style={{ backgroundColor: item.isClicked ? "green" : "white" }}
      onClick={handleClick}
    ></div>
  );
}

export default React.memo(Cell);
