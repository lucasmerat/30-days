import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer(props) {
  return (
    <nav className="footer-nav page-footer footer-expand-lg footer-dark ">
      <Link className="navbar-brand" to="/profile/browse">
      <span className="footer-text" href="https://github.com/lucasmerat/Project-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"> Code</i></span>
       <p className="mt-3 mb-0 text-small copy-rights">© <span id="year">2019</span> 30Days, Co.</p>          
      </Link>
    </nav>
  );
}

export default Footer;
