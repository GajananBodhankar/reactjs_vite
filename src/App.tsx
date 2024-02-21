import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import UseRef from "./hooks/UseRef.tsx";
import UseMemo from "./hooks/useMemo.tsx";
import UseCallback from "./hooks/UseCallback.tsx";

function App() {
  const [count, setCount] = useState(0);
  // return <Navbar />;
  // return <UseRef />;
  // return <UseMemo />;
  return <UseCallback />;
}

export default App;
