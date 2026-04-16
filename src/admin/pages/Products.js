import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch Products
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
      console.log("Fetch Error:", error);
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/products/delete/${id}`
      );

      alert("Product Deleted Successfully");
      fetchProducts();
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  // Search Filter
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-container">
      <AdminSidebar />

      <div className="admin-main">
        <AdminNavbar />

        <div className="products-page">
          <h2>Products</h2>

          <input
            type="text"
            placeholder="Search product..."
            className="product-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>

                    <td>
                      <img
                        src={
                          product.image?.startsWith("http")
                            ? product.image
                            : product.image?.startsWith("/uploads/")
                            ? `${process.env.REACT_APP_API_URL}${product.image}`
                            : `${process.env.REACT_APP_API_URL}/uploads/${product.image}`
                        }
                        alt={product.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={(e) => {
                          e.target.src = "/no-image.png";
                        }}
                      />
                    </td>

                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>₹{product.price}</td>
                    <td>{product.stock}</td>

                    <td>
                      <button
                        className="edit-btn"
                        onClick={() =>
                          navigate(`/admin/edit-product/${product._id}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => deleteProduct(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No Products Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;