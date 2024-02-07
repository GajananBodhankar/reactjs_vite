import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import UseRef from "./hooks/UseRef.tsx";

function App() {
  const [count, setCount] = useState(0);
  // return <Navbar />;
  return <UseRef />;
}

export default App;
