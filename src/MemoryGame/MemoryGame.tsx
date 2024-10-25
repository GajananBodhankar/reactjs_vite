import "./game.css";
function createArr(num: number) {
  let result = [],
    i = 1;
  while (result.length < num * num) {
    if (i == num * (num / 2) + 1) {
      i = 1;
    }
    result.push(i);
    i++;
  }
  result.sort((a, b) => Math.random() - 0.5);
  return result.map((i, j) => ({ count: i, show: false, visible: false }));
}

import { useState } from "react";
function MemoryGame() {
  const [count, setCount] = useState<any>(0);
  const [grid, setGrid] = useState<any>([]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setCount(e.target?.value);
          setGrid([...createArr(e.target.value)]);
        }}
      />
      <button>Create</button>
      <div
        className="mainContainer"
        style={{
          gridTemplateColumns: `repeat(${count},auto)`,
          gridTemplateRows: `repeat(${count},auto)`,
        }}
      >
        {count &&
          grid.map((i: { show: any; count: number }, j: number) => {
            return (
              <div
                className="items"
                key={`${i}-${j}`}
                onClick={() => {
                  setGrid((prev: any) => {
                    let res = [...prev];
                    res.splice(j, 1, {
                      ...res[j],
                      count: i.count,
                      show: true,
                    });
                    return res;
                  });
                  setTimeout(() => {
                    let show = grid.filter((i) => i.show && !i.visible);
                    if (show.length) {
                      if (show[0].count == grid[j].count) {
                        setGrid((prev) => {
                          let res = [...prev];
                          res.forEach((i) => {
                            if (i.count == show[0].count) {
                              i.visible = true;
                            }
                          });
                          return res;
                        });
                      } else {
                        setGrid((prev) => {
                          let res = [...prev];
                          res.forEach((i) => {
                            if (
                              i.count == show[0].count ||
                              i.count == grid[j].count
                            ) {
                              i.visible = false;
                              i.show = false;
                            }
                          });
                          return res;
                        });
                      }
                    }
                  }, 100);
                }}
              >
                <p style={{ visibility: i.show ? "visible" : "hidden" }}>
                  {i.count}
                </p>
              </div>
            );
          })}
        <button onClick={() => setGrid([...createArr(4)])}>Reset</button>
      </div>
    </>
  );
}

export default MemoryGame;
