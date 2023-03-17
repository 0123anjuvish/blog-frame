import React from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

 import Search from "./SearchBar";
 import { BsSearch } from "react-icons/bs";
import me2 from "../Images/me2.jpg";
import Modal from "./modal";
import { NavLink,Link } from "react-router-dom";


function UpperNav() {
  const [query, setQuery] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   window.location.href = `/search/${query}`;
  //   setQuery("");
  // };

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchQuery = formData.get('searchQuery');
    if (searchQuery) {
      window.location.href = `/search?q=${searchQuery}`;
    }
  };

 

  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light nv1">
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

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            /><button className="btn1r" > <BsSearch/></button>
           
          </form>
       <Modal />
        </div>
      </nav>
      {query && <Search query={query} />}
    </>
  );
}

export default UpperNav;