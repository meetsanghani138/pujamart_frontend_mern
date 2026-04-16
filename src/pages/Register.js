import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Register.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");


const handleRegister = async (e) => {
  e.preventDefault();

  if (!name || !email || !pass || !cpass || !address || !phone) {
    return setError("All fields required");
  }

  if (pass !== cpass) {
    return setError("Passwords do not match");
  }

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
  name,
  email,
  phone,  
  password: pass,
  cpassword: cpass,
  address
})
    });

    const data = await res.json();

    if (!res.ok) {
      return setError(data.msg || data.message);
    }

    alert("Registered Successfully ✅");

    // clear form
    setName("");
    setEmail("");
    setPass("");
    setCpass("");
    setAddress("");

  } catch (error) {
    console.log(error);
    setError("Server error");
  }
};

  return (
    <div className="container">
      <div className="card">

        <h1>PUJA MART REGISTER</h1>

        <form onSubmit={handleRegister}>
          <label> Name : </label>
          <input type="text" placeholder="Name"
            value={name} onChange={(e) => setName(e.target.value)} /><br />
          <label> E-mail : </label>
          <input type="email" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <label> Phone : </label>
            <input type="text" placeholder="Phone"
            value={phone}onChange={(e) => setPhone(e.target.value)}/><br />
            <label> Password : </label>
          <input type="password" placeholder="Password"
            value={pass} onChange={(e) => setPass(e.target.value)} /><br />
          <label> Confirm password : </label>
          <input type="password" placeholder="Confirm Password"
            value={cpass} onChange={(e) => setCpass(e.target.value)} /><br />
          <label> Address : </label>
          <textarea placeholder="Address"
            value={address} onChange={(e) => setAddress(e.target.value)}></textarea><br />

          <button type="submit">Register</button>

          <p style={{ color: "red" }}>{error}</p>

          <p>
            Already have account? <Link to="/login">Login</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Register;