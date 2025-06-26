// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // optional for styling

function Sidebar() {
    const role = localStorage.getItem("role"); // 👈 get current user role

    return (
        <div className="sidebar">
            <h4>Menu</h4>
            <ul className="menu-list">
                <li><Link to="/">🏠 Home</Link></li>

                {role === 'admin' && (
                    <li><Link to="/admin">🛠 Admin Panel</Link></li>
                )}

                {role === 'user' && (
                    <li><Link to="/user">👤 User Profile</Link></li>
                )}

                {(role === 'admin' || role === 'user') && (
                    <li><Link to="/reports">📊 Reports</Link></li>
                )}

                {role === 'viewer' && (
                    <li><Link to="/view-only">👁️ View Only</Link></li>
                )}

                <li><Link to="/logout">🚪 Logout</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
