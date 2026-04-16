import React from "react";
import "../css/Login.css"; // reuse same styling


function About() {
  return (
    <div className="container">
       
      <div className="card">

        <h1>ABOUT PUJA MART</h1>

        <p>
          Welcome to <b>PujaMart</b> 🙏
        </p>

        <p>
          PujaMart is an online platform where you can buy all kinds of
          puja items easily from your home.
        </p>

        <p>
          Our goal is to provide high-quality religious products like:
        </p>

        <ul style={{ textAlign: "left" }}>
          <li>🪔 Diyas & Lamps</li>
          <li>🌸 Flowers & Garlands</li>
          <li>📿 Rudraksha & Mala</li>
          <li>🧴 Puja Samagri Kits</li>
        </ul>

        <p>
          We ensure fast delivery, best quality, and affordable prices.
        </p>

        <p>
          Thank you for choosing PujaMart ❤️
        </p>

      </div>
    </div>
  );
}

export default About;