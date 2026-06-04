import { NavLink } from "react-router-dom";
import "../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Dashboard Summary
      </NavLink>
     
      
    </nav>
  );
}
