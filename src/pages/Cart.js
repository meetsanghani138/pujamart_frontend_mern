import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../css/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ FETCH CART
  const fetchCart = async () => {
    setLoading(true);
    try {
      console.log("=== DEBUG START ===");
      console.log("1. User from localStorage:", user);
      console.log("2. User ID:", user?._id);
      
      if (!user?._id) {
        console.error("No user ID found!");
        setCartItems([]);
        setLoading(false);
        return;
      }
      
      const url = `${process.env.REACT_APP_API_URL}/api/cart/${user._id}`;
      console.log("3. Fetching URL:", url);
      
      const res = await fetch(url);
      console.log("4. Response status:", res.status);
      
      const data = await res.json();
      console.log("5. Response data:", data);
      console.log("6. Is array?", Array.isArray(data));
      console.log("=== DEBUG END ===");

      if (Array.isArray(data)) {
        setCartItems(data);
      } else if (data && Array.isArray(data.cart)) {
        setCartItems(data.cart);
      } else if (data && data.items) {
        setCartItems(data.items);
      } else {
        setCartItems([]);
      }

    } catch (error) {
      console.error("Fetch error:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };


  

  // ✅ LOAD CART
  useEffect(() => {
    if (!user) {
      console.log("No user found, redirecting to login");
      navigate("/login");
      return;
    }
    fetchCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ INCREASE QTY
  const increaseQty = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/cart/increase/${id}`, {
        method: "PUT"
      });
      if (res.ok) fetchCart();
    } catch (error) {
      console.log("Error increasing quantity:", error);
    }
  };

  // ✅ DECREASE QTY
  const decreaseQty = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/cart/decrease/${id}`, {
        method: "PUT"
      });
      if (res.ok) fetchCart();
    } catch (error) {
      console.log("Error decreasing quantity:", error);
    }
  };

  // ✅ REMOVE ITEM
  const removeItem = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/cart/remove/${id}`, {
        method: "DELETE"
      });
      if (res.ok) fetchCart();
    } catch (error) {
      console.log("Error removing item:", error);
    }
  };

  // ✅ CLEAR CART
  const clearCart = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/cart/clear/${user._id}`, {
        method: "DELETE"
      });
      if (res.ok) fetchCart();
    } catch (error) {
      console.log("Error clearing cart:", error);
    }
  };

  // ✅ TOTAL PRICE
  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  if (loading) {
    return (
      <div className="cart-page">
        <Navbar />
        <h1>🛒 Your Shopping Cart</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />

      <h1>🛒 Your Shopping Cart</h1>
    

      {cartItems.length === 0 ? (
        <p>Your cart is empty 😔</p>
      ) : (
        <>
          <div className="cart-container">
            {cartItems.map((item) => (
              <div className="cart-card" key={item._id}>
               <img
  src={`${process.env.REACT_APP_API_URL}/uploads/${item.image}`}
  alt={item.name}
/>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <div>
                  <button onClick={() => decreaseQty(item._id)}>-</button>
                  <span style={{ margin: "10px" }}>{item.quantity}</span>
                  <button onClick={() => increaseQty(item._id)}>+</button>
                </div>
                <p>Subtotal ₹{item.price * item.quantity}</p>
                <button onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            ))}
          </div>
          <h2>Total ₹{total}</h2>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={() => navigate("/checkout")} style={{ marginLeft: "10px" }}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;