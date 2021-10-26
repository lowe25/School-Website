import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Ridgeview</h1>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <NavLink to="/" className="nav-links1">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className="nav-links1">
            <li>About</li>
          </NavLink>

          <NavLink to="/academics" className="nav-links1">
            <li>Academics</li>
          </NavLink>
          <NavLink to="/admission" className="nav-links1">
            <li>Admission</li>
          </NavLink>
        </ul>
        <button className="burger-menu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;

/*
 <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/academics" className="nav-links">
              Academics
            </NavLink>
          </li>
          <li>
            <NavLink to="/admission" className="nav-links">
              Admission
            </NavLink>
          </li>
        </ul>
      </nav>
*/
