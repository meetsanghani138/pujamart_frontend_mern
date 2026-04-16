import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ Static Admin Login
    if (email === "admin@gmail.com" && pass === "12345") {
      localStorage.setItem("adminToken", "true");
      navigate("/admin/dashboard");
      return;
    }

    // ✅ Normal User Login from Backend
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password: pass
          })
        }
      );

      const data = await res.json();

      if (!res.ok || !data.user) {
        return setError(data.message || "Login failed");
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");

    } catch (error) {
      console.log(error);
      setError("Server Error");
    }
  };

  return (
    <div className="container">
      <div className="card">

        <form onSubmit={handleLogin}>

          <h1>PUJA MART LOGIN</h1>

          <label>E-mail :</label>
          <input
            type="email"
            placeholder="Enter E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit">Login</button>

          <p style={{ color: "red" }}>{error}</p>

          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;