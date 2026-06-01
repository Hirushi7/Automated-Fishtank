import { NavLink } from "react-router-dom";
import "../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Dashboard Summary
      </NavLink>
      <NavLink to="/temperature" className="nav-link">
        Temperature
      </NavLink>
      <NavLink to="/water" className="nav-link">
        Water Level
      </NavLink>
      <NavLink to="/feeding" className="nav-link">
        Feeding Times
      </NavLink>
      
    </nav>
  );
}
