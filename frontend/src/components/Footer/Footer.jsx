import React from "react";
import "./Footer.css"; 
import Logo from "../../assets/logo.jpg"; // Add this line (adjust path as needed)

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="Company Logo" /> 
          <span>Pranika</span> {/* Wrap text in span for better styling */}
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <p className="footer-title">Contact Us</p>
          <p>📧 Email: contacts@pranika.com</p>
          <p>📍 Location: 5173 near Industrial Area, Chandigarh</p>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; 2025 Pranika. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;