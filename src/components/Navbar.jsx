import React from "react";

export default function Navbar(props) {
  return (
    <div className={`navbar ${props.style}`}>
      <h2>LOGO</h2>
      <div className="navlinks">
        <p>Link 1</p>
        <h6>Hello</h6>
        <p>Link 2</p>
        <h6>Hello</h6>
        <p>Link 3</p>
      </div>
      <button onClick={props.toggle}>Change Theme</button>
    </div>
  );
}
