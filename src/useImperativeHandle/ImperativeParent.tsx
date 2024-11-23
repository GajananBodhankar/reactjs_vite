import React, { useRef } from "react";
import ImperativeChild from "./ImperativeChild";

type ImperativeRef = {
  focusOrClear(): void;
};

function ImperativeParent() {
  const referImperative = useRef<ImperativeRef>();
  return (
    <div>
      ImperativeParent
      <ImperativeChild ref={referImperative} />
      <button onClick={() => referImperative.current?.focusOrClear()}>
        Click
      </button>
    </div>
  );
}

export default ImperativeParent;
