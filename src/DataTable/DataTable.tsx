import React, { useEffect, useState } from "react";
import "./styles.css";

const sampleData = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 28 },
  { id: 5, name: "Eve", age: 27 },
  { id: 6, name: "Frank", age: 33 },
  { id: 7, name: "Grace", age: 24 },
  { id: 8, name: "Hank", age: 26 },
  { id: 9, name: "Ivy", age: 21 },
  { id: 10, name: "Jack", age: 29 },
  { id: 11, name: "Kate", age: 23 },
  { id: 12, name: "Leo", age: 31 },
  { id: 13, name: "Mia", age: 26 },
  { id: 14, name: "Nate", age: 27 },
  { id: 15, name: "Olivia", age: 22 },
  { id: 16, name: "Paul", age: 34 },
  { id: 17, name: "Quinn", age: 25 },
  { id: 18, name: "Rachel", age: 30 },
  { id: 19, name: "Sam", age: 29 },
  { id: 20, name: "Tina", age: 24 },
  { id: 21, name: "Umar", age: 28 },
  { id: 22, name: "Violet", age: 21 },
  { id: 23, name: "Will", age: 32 },
  { id: 24, name: "Xena", age: 23 },
  { id: 25, name: "Yara", age: 27 },
  { id: 26, name: "Zack", age: 33 },
  { id: 27, name: "Abby", age: 26 },
  { id: 28, name: "Ben", age: 31 },
  { id: 29, name: "Cara", age: 25 },
  { id: 30, name: "Dylan", age: 22 },
  { id: 31, name: "Ella", age: 28 },
  { id: 32, name: "Finn", age: 30 },
  { id: 33, name: "Gina", age: 24 },
  { id: 34, name: "Henry", age: 27 },
  { id: 35, name: "Isla", age: 29 },
  { id: 36, name: "Jake", age: 26 },
  { id: 37, name: "Kara", age: 23 },
  { id: 38, name: "Liam", age: 21 },
  { id: 39, name: "Mona", age: 32 },
  { id: 40, name: "Noah", age: 33 },
];

function DataTable() {
  const [rows, setRows] = useState<any>(5);
  const [tableData, setTableData] = useState<Array<any>>([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTableData(sampleData.slice(0, rows));
    setCount(1);
  }, [rows]);
  return (
    <div style={{ all: "revert" }}>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {tableData.map((i) => (
          <tr>
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.age}</td>
          </tr>
        ))}
      </table>
      <label htmlFor="">Rows per page:</label>
      <select style={{ all: "revert" }} name="" id="" value={rows} onChange={(e) => setRows(+e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <p>
        Page {count} of {Math.ceil(sampleData.length / rows)}
      </p>
      <button
        style={{ all: "revert" }}
        disabled={count == 1}
        onClick={() => {
          let c = count - 1;
          const result = sampleData.slice(rows * (c - 1), rows * (c - 1) + rows);
          setCount(c);
          setTableData(result);
        }}
      >
        Prev
      </button>
      <button
        style={{ all: "revert" }}
        disabled={count >= sampleData.length / rows}
        onClick={() => {
          const result = sampleData.slice(rows * count, rows * count + rows);
          setTableData(result);
          let c = count + 1;
          setCount(c);
        }}
      >
        Next
      </button>
      {count}
    </div>
  );
}

export default DataTable;
