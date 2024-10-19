import  { useEffect, useRef, useState } from "react";
function ProgressBar() {
  const [count, setCount] = useState(0);
  let ref = useRef<any>();
  useEffect(() => {
    ref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);
  }, []);
  useEffect(() => {
    if (count == 100) {
      clearInterval(ref.current);
    }
  }, [count]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10rem",
      }}
    >
      <h1>Progress bar</h1>
      <div
        style={{
          background: `linear-gradient(to right, green ${count}%, rgb(255, 255, 255) 0%)`,
          borderRadius: "10px",
          border: "1px solid black",
        }}
      >
        <p
          style={{ textAlign: "center", color: count < 50 ? "black" : "white" }}
        >
          {count} %
        </p>
      </div>
    </div>
  );
}

export default ProgressBar;
