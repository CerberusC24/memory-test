import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top w-100 text-justify-center text-light">
      <div className="navbar-nav mr-auto">
        <h2 className="nav-item text-align-center">
          Test Your M...emory!
        </h2>
      </div>
      <div>
        <h2 className="nav-item text-align-center">
          Current Score: {props.counter} / Top Score: {props.topScore}
        </h2>
      </div>
    </nav>
  )
}

export default NavBar;
