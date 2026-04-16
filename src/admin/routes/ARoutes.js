import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Users from "../pages/Users";
import AddProduct from "../pages/AddProduct";
import Logout from "../pages/Logout";

function ARoutes() {
  return (
    <Routes>
      {/* Admin Login */}
      <Route path="/" element={<AdminLogin />} />
      <Route path="login" element={<AdminLogin />} />

      {/* After Login */}
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="orders" element={<Orders />} />
      <Route path="users" element={<Users />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="logout" element={<Logout />} />
    </Routes>
  );
}

export default ARoutes;