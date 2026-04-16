import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/order.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/all`);

      setOrders(res.data.orders || []);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />

      <div className="admin-main">
        <AdminNavbar />

        <div className="orders-page">
          <h2>Orders Dashboard</h2>

          {loading ? (
            <h3>Loading...</h3>
          ) : orders.length === 0 ? (
            <h3>No Orders Found</h3>
          ) : (
            <div className="orders-grid">
              {orders.map((item) => (
                <div className="order-card" key={item._id}>
                  <h3>Order #{item._id.slice(-5)}</h3>

                  <p><b>User:</b> {item.userName}</p>

                  <p><b>Total:</b> ₹{item.total}</p>

                  <p><b>Status:</b> {item.status}</p>

                  <p><b>Address:</b> {item.address}</p>

                  <p>
                    <b>Date:</b>{" "}
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;