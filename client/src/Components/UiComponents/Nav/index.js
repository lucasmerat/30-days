import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
    <img className="logo-img" alt="logo" src="/assets/images/Logo30.jpg" ></img>
      <a className="navbar-brand" href="/">
      {props.messege}
      </a>
    </nav>
  );
}

export default Nav;
