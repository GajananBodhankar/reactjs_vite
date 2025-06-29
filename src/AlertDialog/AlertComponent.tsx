import { createContext, CSSProperties, PropsWithChildren, useContext, useEffect, useState } from "react";
import "./AlertStyle.css";
const AlertContext = createContext<any>({});

function useToggle(initialState: boolean = false) {
  const [isVisible, setIsVisible] = useState(initialState);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return { isVisible, toggleVisibility };
}

function AlertComponent({ children }: PropsWithChildren) {
  const { isVisible, toggleVisibility } = useToggle(false);
  useEffect(() => {
    let doc = document.documentElement;
    doc.style.overflow = isVisible ? "hidden" : "scroll";
    return () => {
      doc.style.overflow = "scroll";
    };
  }, [isVisible]);
  return <AlertContext.Provider value={{ isVisible, toggleVisibility }}>{children}</AlertContext.Provider>;
}

AlertComponent.Trigger = function ({ children }: PropsWithChildren) {
  const { toggleVisibility } = useContext(AlertContext);
  return <span onClick={toggleVisibility}>{children}</span>;
};

AlertComponent.Content = function ({ children }: PropsWithChildren) {
  const { toggleVisibility, isVisible } = useContext(AlertContext);
  return (
    isVisible && (
      <div style={alertStyle} onClick={toggleVisibility} className="max">
        <div onClick={(e) => e.stopPropagation()} style={alertChildrenStyle} className="openTransition">
          {children}
        </div>
      </div>
    )
  );
};

AlertComponent.Cancel = function ({ children }: PropsWithChildren) {
  const { toggleVisibility } = useContext(AlertContext);
  return <span onClick={toggleVisibility}>{children}</span>;
};

export default AlertComponent;

const alertStyle: CSSProperties = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 10,
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(96,96,96,.5)",
};

const alertChildrenStyle: CSSProperties = {
  backgroundColor: "white",
  maxWidth: "70vw",
  padding: "10px",
};
