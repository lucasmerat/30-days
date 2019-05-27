import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
  return (
    <nav className="top-nav navbar navbar-expand-lg navbar-dark ">
      <Link className="navbar-brand" to="/profile/browse">
        <img className="logo-img" alt="logo" src="/assets/images/Logo30.jpg" />
        {props.messege}

      </Link>
    </nav>
  );
}

export default Nav;
