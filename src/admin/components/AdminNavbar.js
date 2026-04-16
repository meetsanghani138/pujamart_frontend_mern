import React from "react";
import "../css/AdminNavbar.css";

function AdminNavbar() {
  return (
    <div className="admin-navbar">
      
      <div className="navbar-left">
        <h2>PujaMart Admin</h2>
      </div>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />

        <div className="navbar-icons">
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
        </div>
      </div>

    </div>
  );
}

export default AdminNavbar;