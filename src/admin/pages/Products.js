import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/all`);
      setProducts(res.data.products || []);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/delete/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // Search filter
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
                        src={`${process.env.REACT_APP_API_URL}/uploads/${product.image}`}
                        alt={product.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "8px"
                        }}
                      />
                    </td>

                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>₹{product.price}</td>
                    <td>{product.stock}</td>

                    <td>
                      <button className="edit-btn">Edit</button>

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