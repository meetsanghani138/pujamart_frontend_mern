import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../css/Products.css";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products/all`
      );

      setProducts(res.data.products || []);

    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (item) => {
    try {
      if (!user) {
        navigate("/login");
        return;
      }

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/cart/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: user._id,
            userName: user.name,
            productId: item._id,
            name: item.name,
            price: item.price,
            image: item.image
          })
        }
      );

      const data = await res.json();

      if (res.ok) {
        navigate("/cart");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="products-page">
        <h1>All Products</h1>

        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item._id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;