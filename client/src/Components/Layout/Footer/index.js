import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footer-nav page-footer footer-expand-lg footer-dark ">
      <a className="footer-text navbar-brand" href="https://github.com/lucasmerat/30-days" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"> Code</i></a>
       <p className="mt-3 mb-0 text-small copy-rights">© <span id="year">2019</span> 30Days, Co.</p>          
    </nav>
  );
}

export default Footer;