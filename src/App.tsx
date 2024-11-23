import "./App.css";
import useToggle from "./useToggle";

function App() {
  const [isDark, toggleDark] = useToggle();
  const [isVisible, toggleVisible] = useToggle();
  return (
    <div>
      <p>Mode {isDark ? "true" : "false"}</p>
      <button onClick={toggleDark}>Toggle mode</button>
      <p>Visibility is {isVisible ? "true" : "false"}</p>
      <button onClick={toggleVisible}>Toggle Visibility</button>
    </div>
  );
}

export default App;
