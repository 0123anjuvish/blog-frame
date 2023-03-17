import React from "react";
import { useState } from "react";
// import yt from "../Images/yt(1).png";
import ln from "../Images/ln.png";
import git from "../Images/git.png";
import insta from "../Images/insta.png";
import tw from "../Images/tw.png";
import logo1 from "../Images/logo1.png";
function Footer() {

  const[email,setEmail] = useState(" ");

  const handleChange =()=>{
    localStorage.setItem("Email",email);
 
    if(handleChange){
      alert("Thanks for subscribing us") 
    ;}
      }

    return (
   
    <>
   
   <div class="container-fluid cc">
  <footer class="py-5">
    <div class="row">
      <div class="col-2">
        <h5>Blog Frame</h5>
      <img src={logo1} className="imgg"/>
      <p>This is the page where you can read a blog which you wants.</p>
      </div>

      <div class="col-2">
        <h5>Our Products</h5>
        <ul class="nav flex-column">
        <li class="mb-2">Educational Blogs</li>
          <li class="mb-2">Food Blogs</li>
          <li class="mb-2">Entertainment Blogs</li>
          <li class="mb-2">Health Blogs</li>
          <li class="mb-2">News blogs</li>
        </ul>
      </div>

      <div class="col-2">
        <h5>Policy info</h5>
        <ul class="nav flex-column">
        <li class="mb-2">Privacy Policy</li>
        
          <li class="mb-2">Terms of Use</li>
          <li class="mb-2">Report Abuse & Takedown Policy</li>
          <li class="mb-2">FAQ</li>
        </ul>
      </div>

      <div class="col-4 offset-1">
        <form>
          <h5>Please leave a Message to us</h5>
          <h6>Monthly digest of whats new and exciting from us.</h6>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Write Here</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Give your Suggestion"  value={email}
            onChange={(e) => setEmail(e.target.value)}/>



            <button class="btn2" type="button" onClick={handleChange}>Subscribe</button>

            
          </div>
        </form>
      </div>
    </div>

   
  </footer>
</div>

<hr/>
     <nav class="navbar fixed-bottom navbar-light bg-light ft">
  <div class="container-fluid">
  <h6>© 2022 by Blog Frame,Inc. All rights reserved.</h6>
      <h6 style={{marginLeft:"27em" }}>MADE FOR BHARAT 💓</h6>
      <ul class="list-unstyled d-flex">
       
         <li class="ms-3"><a href="https://www.linkedin.com/in/anju-vishwakarma-63531a23b/"><img src={ln} height="30" width="30"/></a></li>
        <li class="ms-3"><a href="https://github.com/0123anjuvish"><img src={git} height="30" width="30"/></a></li>
        <li class="ms-3"><a href="https://www.instagram.com/vishanju0123/"><img src={insta} height="30" width="30"/></a></li>
        <li class="ms-3"><a href=""><img src={tw} height="30" width="30"/></a></li>
      </ul>
  </div>
</nav>




    </>
    );
  }
  
  export default Footer;

 