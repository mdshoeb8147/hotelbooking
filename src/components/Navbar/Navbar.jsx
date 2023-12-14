import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="nav-logo">MY-BOOKING</span>
        </Link>
        <div className="nav-items">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Login</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
