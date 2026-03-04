import React from "react";
import "./App.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <div>LOGO</div>
        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to={"/event"} className="nav-link">
            Events
          </NavLink>
          <NavLink to={"/donate"} className={"donate-btn"}>
            Donate
          </NavLink>
        </nav>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </header>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
