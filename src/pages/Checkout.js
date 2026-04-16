import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../css/Checkout.css";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`${process.env.REACT_APP_API_URL}/api/cart/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          setCartItems([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const total = Array.isArray(cartItems)
    ? cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    : 0;

const placeOrder = async () => {
  if (!address.trim()) {
    alert("Enter address");
    return;
  }

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/orders/place`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user._id,
        userName: user.name,
        address
      })
    });

    const data = await res.json();

    console.log("Response:", data);

    if (res.ok) {
      alert("Order placed 🎉");
      navigate("/orders");
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.log("FULL ERROR:", error);
    alert("Something went wrong");
  }
};

  return (
    <div className="cart-page">
      <Navbar />

      <h1>🧾 Checkout</h1>

      {cartItems.map((item) => (
        <div key={item._id}>
          <p>
            {item.name} × {item.quantity} = ₹
            {item.price * item.quantity}
          </p>
        </div>
      ))}

      <h2>Total ₹{total}</h2>

      <textarea
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br />

      <button onClick={placeOrder}>
        Place Order ✅
      </button>
    </div>
  );
}

export default Checkout;