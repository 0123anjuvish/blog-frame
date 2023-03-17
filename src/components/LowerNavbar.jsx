import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Header.css';
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import './App.css';

function LowerNav() {
    return (
    <>
    
  

    <nav className="navbar navbar-expand-lg navbar-light ">
      
  <div className="container-fluid bd1">
   
    {/* <a className="ac"><p>Home</p></a> */}
    <NavLink to = "/"><p>Home</p></NavLink>
    
  
    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Blogs
          </a>
         
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink to ="/health">Health Blogs</NavLink></li>
            <li> <NavLink to ="/recipe">Recipe Blogs</NavLink></li>
            <li><NavLink to ="/etn">EnterTainment blogs</NavLink></li>
           
            <li><NavLink to ="/edu">Educational Blogs</NavLink></li>
          </ul>
 
         
          {/* <a className="ac " aria-current="page"><p>About Us</p></a> */}
         
       <NavLink to ="/about"><p>About Us</p></NavLink>
         
       
       
         {/* <a className="ac"><p>Contact Us</p></a> */}
         <NavLink to = "/contact"><p>Contact Us</p></NavLink>
         
         
       
  </div>
</nav>
    
    </>
    );
  }
  
  export default LowerNav;