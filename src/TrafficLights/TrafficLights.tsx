import React, { useEffect, useState } from "react";
import "./style.css";
function TrafficLights() {
  const [light, setLight] = useState("red");
  useEffect(() => {
    let timer = setInterval(() => {
      switch (light) {
        case "red": {
          setLight("green");
          break;
        }
        case "yellow": {
          setLight("red");
          break;
        }
        case "green": {
          setLight("yellow");
          break;
        }
      }
    }, getTimer(light));
    return () => {
      clearTimeout(timer);
    };
  }, [light]);
  function getTimer(light) {
    switch (light) {
      case "red":
        return 4000;
      case "yellow":
        return 1000;
      case "green":
        return 3000;
    }
  }
  return (
    <div className={"container"}>
      <div className={light == "red" ? "red" : "red hide"}></div>
      <div className={light == "yellow" ? "yellow" : "yellow hide"}></div>
      <div className={light == "green" ? "green" : "green hide"}></div>
    </div>
  );
}

export default TrafficLights;
