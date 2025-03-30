import { Link } from "react-router-dom";
import Logo from"../../assets/logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} height="55"></img>
        <h1 className="brand">Pranika</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
