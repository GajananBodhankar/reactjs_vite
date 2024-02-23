import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import UseRef from "./hooks/UseRef.tsx";
import UseMemo from "./hooks/useMemo.tsx";
import UseCallback from "./hooks/UseCallback.tsx";
import UseForm from "./hooks/UseForm.tsx";
import { Provider } from "react-redux";
import SagaStore from "./ReduxSaga/SagaStore.ts";
import Index from "./ReduxSaga/Index.tsx";

function App() {
  const [count, setCount] = useState(0);
  // return <Navbar />;
  // return <UseRef />;
  // return <UseMemo />;
  // return <UseCallback />;
  // return <UseForm />;
  return (
    <Provider store={SagaStore}>
      {/* <Index /> */}
      <Index />
    </Provider>
  );
}

export default App;
