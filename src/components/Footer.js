import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>PujaMart</h3>
          <p>
            Your one-stop online store for authentic puja items, idols,
            diyas, incense, and spiritual essentials for every festival.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Festival Offers</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Rajkot, Gujarat, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@pujamart.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>▶</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="footer-bottom">
        <p>© 2026 PujaMart | Privacy Policy | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;