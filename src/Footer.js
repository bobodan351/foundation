import React from "react";
import { Link } from "react-router";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./App.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo-container">
          <div className="footer-logo">logo</div>
          <i className="footer-text">
            "In the heart of every child lies a spark of potential. At TFUF, we
            are committed to nurturing this potential in Nigeria, providing the
            support and care that every child deserves. Join us in our journey
            to create brighter futures."
          </i>
        </div>
        <div className="footer-links-container">
          <h1>Useful Link</h1>
          <Link to="/about">About</Link>
          <Link to="/event">Event</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/donate">Donate</Link>
        </div>
        <div className="footer-news-container">
          <h1>Latest News</h1>
          <p className="news">A new cause to help</p>
          <p className="news-date">July 27, 2025</p>
          <p className="news">We love to help people</p>
          <p className="news-date">March 4, 2025</p>
          <p className="news">The new ideas for helping people</p>
          <p className="news-date">September 7, 2025</p>
        </div>
        <div className="footer-contact-container">
          <h1>Contact</h1>
          <p>
            <FaPhone />{"+12 3456 7890 "}
          </p>
          <p><FaEnvelope /> office@gmail.com</p>
          <p><FaMapMarkerAlt /> 123 Main Street, City, Country</p>
        </div>
		  </div>
		  <div className="footer-bottom">
  © 2026 TFUF. All rights reserved.
</div>
    </footer>
  );
};

export default Footer;
