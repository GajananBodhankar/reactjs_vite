import React, { useState } from "react";
import classNames from "classnames";
import "./styles.css";
function Page() {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setisHovered] = useState(false);

  const btnClass = classNames({
    btn: true,
    "btn-pressed": isPressed,
    "btn-hovered": isHovered,
  });
  return (
    <div>
      Page
      <button
        className={btnClass}
        onClick={() => setIsPressed((prev) => !prev)}
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
      >
        Press
      </button>
    </div>
  );
}

export default Page;
