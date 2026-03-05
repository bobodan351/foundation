import React from "react";
import {  NavLink } from "react-router";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
			  <div className="footer-section">
				  <div className="footer-logo">logo</div>
				  <p className="footer-text">"In the heart of every child lies a spark of potential. At TFUF, we are committed to nurturing this potential in Nigeria, providing the support and care that every child deserves. Join us in our journey to create brighter futures."</p>
		</div>
        {/* Useful Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Useful Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/event">Events</NavLink>
            </li>
            <li>
              <NavLink to="/donate">Donate</NavLink>
            </li>
          </ul>
        </div>

        {/* Latest News Section */}
        <div className="footer-section">
          <h3 className="footer-title">Latest News</h3>
          <ul className="footer-news">
            <li>
              <NavLink to="#">A new cause to help</NavLink>
              <span className="news-date">July 27, 2025</span>
            </li>
            <li>
              <NavLink to="#">We love to help people</NavLink>
              <span className="news-date">July 20, 2025</span>
            </li>
            <li>
              <NavLink to="#">The new ideas for helping</NavLink>
              <span className="news-date">July 15, 2025</span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <FaPhone />
              </span>
              <span>+45 677 8993000 223</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <span>office@template.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              <span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span>
            </div>
          </div>
        </div>
		  </div>
		  <div className="footer-bottom">
          <div className="social-icons">
            <NavLink to="#"><FaFacebookF /></NavLink>
            <NavLink to="#"><FaInstagram /></NavLink>
            <NavLink to="#"><FaLinkedinIn /></NavLink>
          </div>

          <p className="copyright">
            Copyright © 2025 All rights reserved | The Frances Ushedo Foundation ♥
          </p>
        </div>
    </footer>
  );
};

export default Footer;
