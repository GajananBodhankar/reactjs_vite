import React, { forwardRef, useImperativeHandle, useRef } from "react";

function ImperativeChild(props: any, ref: React.Ref<any> | undefined) {
  const inputref = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => {
    return {
      focusOrClear: () => {
        console.log(inputref.current);
        // if (document.activeElement === inputref.current) {
        //   inputref.current?.blur();
        // } else {
        //   inputref.current?.focus();
        // }
      },
    };
  });

  return (
    <div>
      ImperativeChild
      <input type="text" name="" id="" ref={inputref} />
    </div>
  );
}

export default forwardRef(ImperativeChild);
