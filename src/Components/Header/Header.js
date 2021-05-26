import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">Erick Meline</Link>
        <div className="navbar-nav">
          <Link to="/" className={location.pathname === "/" ? "nav-item nav-link active" : "nav-item nav-link"}>About</Link>
          <Link to="/resume" className={location.pathname === "/resume" ? "nav-item nav-link active" : "nav-item nav-link"}>Resume</Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-item nav-link active" : "nav-item nav-link"}>Portfolio</Link>
        </div>
    </nav>
  );
}

export default Header;
