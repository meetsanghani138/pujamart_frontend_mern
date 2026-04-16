import React from "react";
import { Link } from "react-router-dom";
import "../css/AdminSidebar.css";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">

      <h2 className="sidebar-logo">PujaMart</h2>

      <ul className="sidebar-menu">

        <li>
          <Link to="/admin/dashboard">📊 Dashboard</Link>
        </li>

        <li>
          <Link to="/admin/products">📦 Products</Link>
        </li>

        <li>
          <Link to="/admin/add-product">➕ Add Product</Link>
        </li>

        <li>
          <Link to="/admin/orders">🛒 Orders</Link>
        </li>

        <li>
          <Link to="/admin/users">👤 Users</Link>
        </li>

        <li>
          <Link to="/admin/logout">🚪 Logout</Link>
        </li>

      </ul>

    </div>
  );
}

export default AdminSidebar;