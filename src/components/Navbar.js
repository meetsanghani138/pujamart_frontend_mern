import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      {/* Logo */}
      <h2 className="logo">🪔 PujaMart</h2>

      {/* Links */}
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li> <Link to="/pandit">Pandit Service</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>

      {/* Search */}
      <input
        type="text"
        placeholder="Search pooja items..."
        className="search"
      />

      {/* Cart Icon */}
      <div className="cart">🛒</div>

    </div>
  );
}

export default Navbar;