import React, { useEffect, useState } from "react";

function useDebounce(value, timer = 1000) {
  const [dvalue, setDvalue] = useState(value);
  useEffect(() => {
    let result = setTimeout(() => {
      setDvalue(value);
    }, timer);
    return () => {
      clearInterval(result);
    };
  }, [value]);
  return dvalue;
}

function Debouncing() {
  const [search, setSearch] = useState("");
  let debounceVal = useDebounce(search, 2000);
  useEffect(() => {
    console.log("Changed");
  }, [debounceVal]);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name=""
        id=""
      />
    </div>
  );
}

export default Debouncing;
