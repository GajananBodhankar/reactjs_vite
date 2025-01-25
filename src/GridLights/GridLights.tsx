import { useEffect, useState } from "react";
import "./style.css";
import Cell from "./Cell";
import { handleTimer } from "./Logic";

function GridLights() {
  const [arr, setArr] = useState(
    [...new Array(9).keys()].map((_item) => ({ isClicked: false }))
  );
  const [index, setIndex] = useState<Array<any>>([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    var timer: any = flag && handleTimer(index, setIndex, setArr, setFlag);
    return () => {
      clearTimeout(timer);
    };
  }, [arr]);
  return (
    <div className="container">
      <div className="grid">
        {arr.map((item, indexNum) => {
          if (indexNum != 4) {
            return (
              <Cell
                key={indexNum}
                item={item}
                ind={indexNum}
                index={index}
                setArr={setArr}
                setIndex={setIndex}
                arr={arr}
                setFlag={setFlag}
              />
            );
          }
          return <span key={indexNum}></span>;
        })}
      </div>
    </div>
  );
}

export default GridLights;
