import { createContext, ReactNode, useContext, useState } from "react";
interface iPopover {
  children: ReactNode;
}
export const PopoverContext = createContext({ isOpen: false, toggleOpen: () => {} });
function Popover({ children }: iPopover) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <PopoverContext.Provider value={{ isOpen, toggleOpen }}>
      <div className="popover">{children}</div>
    </PopoverContext.Provider>
  );
}

function Action({ children }: iPopover) {
  const { toggleOpen } = useContext(PopoverContext);
  return (
    <button
      onClick={(e) => {
        toggleOpen();
        console.log(e.target?.getBoundingClientRect());
      }}
    >
      {children}
    </button>
  );
}
function Content({ children }: iPopover) {
  const { isOpen } = useContext(PopoverContext);
  return <div className={isOpen ? "content" : "content hidden"}>{children}</div>;
}
Popover.Action = Action;
Popover.Content = Content;

export function MainPopover() {
  return (
    <div id="nameDiv">
      <Popover>
        <Popover.Action>Click me</Popover.Action>
        <Popover.Content>I am content</Popover.Content>
      </Popover>
      <p style={{ backgroundColor: "red", margin: 0 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsum!</p>
    </div>
  );
}

export default Popover;