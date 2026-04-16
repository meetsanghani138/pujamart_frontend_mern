import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Logout.css";

function Logout() {

  const navigate = useNavigate();

  const handleLogout = () => {

    // remove admin session
    localStorage.removeItem("admin");

    // redirect to login page
    navigate("/login");

  };

  const cancelLogout = () => {

    // go back to dashboard
    navigate("/admin/dashboard");

  };

  return (

    <div className="logout-container">

      <div className="logout-box">

        <h2>Logout Confirmation</h2>

        <p>Are you sure you want to logout?</p>

        <div className="logout-buttons">

          <button
            className="logout-confirm"
            onClick={handleLogout}
          >
            Yes, Logout
          </button>

          <button
            className="logout-cancel"
            onClick={cancelLogout}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );

}

export default Logout;