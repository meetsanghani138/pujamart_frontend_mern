import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../css/Orders.css"

function Orders() {

  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/orders/${user._id}`)
      .then(res => res.json())
      .then(data => setOrders(data.orders || []));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />

      <h1>🧾 My Orders</h1>

      {orders.map(order => (
        <div key={order._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          
          <h3>Order ID: {order._id}</h3>
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.total}</p>

          {order.items.map((item, i) => (
            <p key={i}>
              {item.name} × {item.quantity}
            </p>
          ))}

        </div>
      ))}
    </div>
  );
}

export default Orders;