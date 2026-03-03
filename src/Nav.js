import React from "react";
import "./App.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
	  <header>
		  <div>
			  LOGO
		  </div>
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
        <NavLink to={"/donate"} className={'donate-btn'}>Donate</NavLink>
      </nav>
    </header>
  );
};

export default Nav;
