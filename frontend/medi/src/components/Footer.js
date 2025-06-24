// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-col">
                  <img src="data:image/png;base64,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" alt="logo" className="logo-img" />

          <h2>Medingen</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at urna et leo rhoncus mattis. Maecenas vel scelerisque nunc.</p>
        </div>
        <div className="footer-col">
          <h4>Website</h4>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>How it works</li>
            <li>Whats our customers say?</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <ul>
            <li>Help Center</li>
            <li>Become Member</li>
            <li>Events</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Medingen. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;