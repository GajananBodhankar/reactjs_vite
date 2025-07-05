import React from 'react'

function DraggableStickyNotes() {
  return (
    <div ref={ref} draggable={true} onDragEnd={e=>console.log(e)} >DraggableStickyNotes</div>
  )
}

export default DraggableStickyNotes