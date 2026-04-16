import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/Dashboard.css";

function Dashboard() {
  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-main">
        <AdminNavbar />

        <h1>Admin Dashboard</h1>

        {/* Recent Orders */}
        <div className="dashboard-section">
          <h2>Recent Orders</h2>

          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#101</td>
                <td>Meet</td>
                <td>Pending</td>
                <td>₹450</td>
              </tr>

              <tr>
                <td>#102</td>
                <td>Rahul</td>
                <td>Shipped</td>
                <td>₹650</td>
              </tr>

              <tr>
                <td>#103</td>
                <td>Priya</td>
                <td>Delivered</td>
                <td>₹320</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Low Stock */}
        <div className="dashboard-section">
          <h2>Low Stock Products</h2>

          <ul>
            <li>Diyas – 5 left</li>
            <li>Puja Kit – 2 left</li>
            <li>Camphor – 3 left</li>
          </ul>
        </div>

        {/* New Users */}
        <div className="dashboard-section">
          <h2>New Users</h2>

          <ul>
            <li>Meet Sanghani</li>
            <li>Rahul Sharma</li>
            <li>Priya Patel</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;