import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Pandit from "../pages/Pandit";

function UserRoutes() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main Pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
       <Route path="/pandit" element={<Pandit />} />
    </Routes>
  );
}

export default UserRoutes;