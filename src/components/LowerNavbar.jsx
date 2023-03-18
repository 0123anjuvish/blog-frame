import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Styles/Header.css';
import { NavLink } from "react-router-dom";


function LowerNav() {
 
    return (
    <>
    
  

    <nav className="navbar navbar-expand-lg navbar-light ">
      
  <div className="container-fluid bd1">
   
  
    <NavLink to = "/"><p>Home</p></NavLink>
    
  
  

<div class="dropdown">
  <span class="dropbtn"><p>Blogs</p></span>
  <div class="dropdown-content">
    <ul>
    <li><NavLink to ="/health">Health</NavLink></li>
            <li> <NavLink to ="/recipe">Recipe</NavLink></li>
            <li><NavLink to ="/etn">Entertainment</NavLink></li>
           
            <li><NavLink to ="/edu">Educational</NavLink></li>
   
    </ul>
  </div>
</div>
      
         
       <NavLink to ="/about"><p>About Us</p></NavLink>
         
       
       
        
         <NavLink to = "/contact"><p>Contact Us</p></NavLink>
         
         
       
  </div>
</nav>
    
    </>
    );
  }
  
  export default LowerNav;