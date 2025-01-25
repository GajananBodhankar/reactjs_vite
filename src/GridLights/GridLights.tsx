import React, { useEffect, useState } from "react";
import "./style.css";
function GridLights() {
  const [arr, setArr] = useState([
    ...new Array(9).keys()?.map((i) => ({ isClicked: false })),
  ]);
  const [index, setIndex] = useState<Array<any>>([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (flag) {
      var timer = setTimeout(() => {
        setArr((prev) => {
          let result = [...prev];
          result[index[0]].isClicked = false;
          return result;
        });
        setIndex((prev) => {
          let res = [...prev];
          res.shift();
          if (!res.length) {
            setFlag(false);
          }
          return res;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [arr]);
  return (
    <div className="container">
      <div className="grid">
        {arr.map((i, j) => {
          if (j != 4) {
            return (
              <div
                className="items"
                key={j}
                style={{ backgroundColor: i.isClicked ? "green" : "white" }}
                onClick={() => {
                  setArr((prev) => {
                    let result = [...prev];
                    result[j].isClicked = true;
                    return result;
                  });
                  setIndex([...index, j]);
                  if (index.length + 2 == arr.length) {
                    setFlag(true);
                  }
                }}
              >
                {j}
              </div>
            );
          } else {
            return <div key={j}></div>;
          }
        })}
      </div>
    </div>
  );
}

export default GridLights;
