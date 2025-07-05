import React, { useRef, useState } from "react";

function DraggableStickyNotes() {
  const ref = useRef<HTMLDivElement>(null);
  const [{ left, top }, setClient] = useState<any>({ left: undefined, top: undefined });
  return (
    <>
      <div
        ref={ref}
        draggable={true}
        style={{ position: "relative" }}
        onDragEnd={({ clientX, clientY }) => {
          ref.current.style.left = `${clientX}px`;
          ref.current.style.top = `${clientY}px`;
        }}
      >
        DraggableStickyNotes
      </div>
      <p draggable={true} style={{marginTop: 100}} onDragOver={e=>{
        alert('')
        console.log(e)
      }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, atque.</p>
    </>
  );
}

const styles = (data: { clientX: number; clientY: number }) => ({
  left: `${data.clientX}px`,
  top: `${data.clientY}px`,
});

export default DraggableStickyNotes;
