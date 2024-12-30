import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="left-side">
        <NavLink to="/" className="Logo">
          {/* Logo content */}
        </NavLink>
      </div>
      <ul className="pages">
        <li>
          <NavLink
            to="/apartments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Apts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
