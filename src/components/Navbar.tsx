import React, { useState } from "react";
import "./Navstyle.css";
function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <nav className="container">
        <h1>Gajanan</h1>

        <ul className="list">
          <li className="underline">Home</li>
          <li className="underline">Contact</li>
          <li className="underline">About</li>
        </ul>
        <button className="menu" onClick={() => setShow(!show)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
      {show && (
        <div className="subContainer">
          <button className="cross" onClick={() => setShow(!show)}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <ul className="buttonUl">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
