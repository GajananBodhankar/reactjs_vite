import React, { useDeferredValue, useState } from "react";
// here, while user is giving an input to the input as "Gajananananana"
// while he/she is typing, the <Component/> will not re-render, it will re-render
// with the latest value Gajananananana and that to only once i.e when user stops typing
// useDeferredValue - while the value in it is updating continuously, do not take the updating value
// till the time, use a deferred value, and once the updating is finished, remove the deferred value and 
// take the latest value. 
function UseDeferredValue() {
  const [name, setName] = useState("");
  const value = useDeferredValue(name);
  return (
    <div>
      <input
        type="text"
        className="w-full bg-amber-200 border-amber-300"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
