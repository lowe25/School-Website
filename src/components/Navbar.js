import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
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
    </div>
  );
}

export default Navbar;
