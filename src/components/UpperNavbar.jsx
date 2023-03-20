import React from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./SearchBar";

import me2 from "../Images/me2.jpg";
import Modal from "./modal";
import { NavLink, useNavigate } from "react-router-dom";

function UpperNav() {
  return (
    <>
      <nav className="navbar nv1">
        <div className="container-fluid">
          <a className="navbar-brand ">
            <NavLink to="/">
              <img
                src={me2}
                alt=""
                className="d-inline-block align-text-top img1"
              />
            </NavLink>
          </a>

          <Search />

          <Modal />
        </div>
      </nav>
    </>
  );
}

export default UpperNav;
