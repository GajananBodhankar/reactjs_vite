import React, { useDeferredValue, useState } from "react";

function UseDeferredValue() {
  const [name, setName] = useState("");
  const value=useDeferredValue(name)
  return (
    <div>
      <input type="text" className="w-full bg-amber-200 border-amber-300" value={name} onChange={(e) => setName(e.target.value)} />
      {[...Array.from(new Array(10))].map((i) => (
        <Component name={value} />
      ))}
    </div>
  );
}

const Component = ({ name }: { name: string }) => {
  let i = 0;
  while (i < 100000000) {
    i++;
  }
  return (
    <div>
      <p className="text-red-300">Name is {name}</p>
    </div>
  );
};

export default UseDeferredValue;
