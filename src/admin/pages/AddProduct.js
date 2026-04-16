import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/AddProduct.css";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: ""
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", product.name);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("stock", product.stock);
      formData.append("description", product.description);
      formData.append("image", imageFile);

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/products/add`,
        formData
      );

      alert("Product Added Successfully");

      setProduct({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: ""
      });

      setImageFile(null);

    } catch (error) {
      console.log(error);
      alert("Error adding product");
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />

      <div className="admin-main">
        <AdminNavbar />

        <div className="add-product">
          <h2>Add New Product</h2>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="diyas">Diyas</option>
              <option value="incense">Incense</option>
              <option value="puja-kit">Puja Kit</option>
              <option value="idols">Idols</option>
            </select>

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              value={product.stock}
              onChange={handleChange}
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImageFile(e.target.files[0])
              }
              required
            />

            <textarea
              name="description"
              placeholder="Product Description"
              value={product.description}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;