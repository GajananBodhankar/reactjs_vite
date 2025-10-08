import React, { useEffect, useState } from 'react'

function FlushSyncComponent() {
   const [name, setName] = useState("");
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <div>
      App
      <input
        type="text"
        className=""
        value={name}
        onChange={(e) => {
          // flushSync(() => setName(prev=>prev+e.target.value));
          // flushSync(() => setName(prev=>prev+e.target.value));
          setName(prev=>prev+e.target.value);
          setName(prev=>prev+e.target.value);
          // flushSync(() => setName(e.target.value));
          // flushSync(() => setName(e.target.value));
        }}
      />
    </div>
  );

}

export default FlushSyncComponent

