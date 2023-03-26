import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Styles/Header.css";
import { NavLink } from "react-router-dom";

function LowerNav() {
  return (
    <>
      <nav className="navbar nv2">
        <div className="container-fluid bd1">
          <NavLink to="/">
            <p className="p1">Home</p>
          </NavLink>
          <div className="dropdown-menuu">
            <span className="dropbtn">
              <p className="p1">Blogs</p>
            </span>
           
            <div class="menu-content">
              <NavLink to="/health" className="links">
                Health
              </NavLink>
              <NavLink to="/recipe" className="links">
                Recipe
              </NavLink>
              <NavLink to="/etn" className="links">
                Entertainment
              </NavLink>
              <NavLink to="/edu" className="links">
                Educational
              </NavLink>
            </div>
          </div>

          <NavLink to="/about">
            <p className="p1">About Us</p>
          </NavLink>

          <NavLink to="/contact">
            <p className="p1">Contact Us</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default LowerNav;



