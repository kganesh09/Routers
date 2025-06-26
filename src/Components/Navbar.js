import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // optional CSS

function Navbar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>{role==='admin'?"My Dashboard": "user"}</h3>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">🏠 Home</Link></li>

        {role === "admin" && <li><Link to="/admin">🛠 Admin</Link></li>}
        {role === "user" && <li><Link to="/user-profile">👤 Profile</Link></li>}

        <li><Link to="/reports">📊 Reports</Link></li>
        <li><Link to="/view-only">🔍 View</Link></li>
        <li><button className="logout-btn" onClick={handleLogout}>🚪 Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
