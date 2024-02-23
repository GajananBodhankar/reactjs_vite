import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./Converters";
import { asyncThunk } from "./Slice";
function Index() {
  let { data, state } = useAppSelector((state) => state.SliceReducer);
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncThunk());
  }, []);
  useEffect(() => {
    console.log(data, state);
  }, [state]);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "scroll" }}>
        {state == "success" &&
          data.map((i) => {
            return (
              <div style={{ border: "1px solid black", minWidth: "10%" }}>
                <p>{i.id}</p>
                <p>{i.title}</p>
                <p>{i.price}</p>
                <img
                  src={i.images[0]}
                  alt=""
                  width={"100%"}
                  height={"max-content"}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Index;
