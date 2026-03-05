import React from "react";
import "./App.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
  return (
    <>
		  <header style={isOpen === true ? { opacity: 0.7,transition: "opacity 0.5s ease"}: { opacity: 1, transition: "opacity 0.5s ease"}}>
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
			   <div className="close-btn" onClick={() => setIsOpen(false)}>
				✕
			  </div>
        <NavLink to="/" onClick={() => setIsOpen(false)} className={'a'}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className={'a'}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)} className={'a'}>
          Contact
			  </NavLink>
			  <NavLink to={"/event"} onClick={() => setIsOpen(false)} className={'a'}>
			Events
		  </NavLink>
		<NavLink to={"/donate"} onClick={() => setIsOpen(false)} className={"donate-btn"}>
			Donate
		  </NavLink>
      </div>
    </>
  );
};

export default Nav;
