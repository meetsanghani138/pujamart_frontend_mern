import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch users
  useEffect(() => {
    fetchUsers();
  }, []);

const fetchUsers = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/all`);
    setUsers(res.data.users || []);
  } catch (error) {
    console.log(error);
  }
};

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/delete/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Search filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-container">
      <AdminSidebar />

      <div className="admin-main">
        <AdminNavbar />

        <div className="users-page">
          <h2>Users Management</h2>

          <input
            className="user-search"
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="users-grid">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <div className="user-card" key={user._id}>
                  <div className="avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>{user.address}</p>

                  <span className="user-status Active">
                    Active
                  </span>

                  <div className="user-actions">
                    <button className="view-btn">View</button>

                    <button className="block-btn">
                      Block
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h3>No Users Found</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;