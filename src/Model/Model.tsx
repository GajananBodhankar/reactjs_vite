import React, { useRef } from "react";

function Model(props: any) {
  const mainref = useRef<HTMLDivElement>(null);
  return props.show ? (
    <div
      id="model"
      onClick={(e) => {
        console.log(e.target);
        if (e.target != mainref.current) {
          props.setShow((prev) => !prev);
        }
      }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "rgb(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
      }}
    >
      <div
        ref={mainref}
        style={{
          height: "100px",
          width: "100px",
          background: "white",
          border: "1px solid black",
        }}
      >
        Hello I am model
        <button
          onClick={(e) => {
            e.stopPropagation();
            props.setShow((prev) => !prev);
          }}
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
}

export default Model;
