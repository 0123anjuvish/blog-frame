import  React , { useState,useEffect } from "react";
// import yt from "../Images/yt(1).png";
import ln from "../Images/ln.png";
import git from "../Images/git.png";
import insta from "../Images/insta.png";
import tw from "../Images/tw.png";
import me2 from "../Images/me2.jpg";
function Footer() {

  const[email,setEmail] = useState(" ");
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleChange =()=>{
    localStorage.setItem("Email",email);
 
    if(handleChange){
      alert("Thanks for subscribing us") 
    ;}
      }
      // useEffect(() => {
      //   const handleResize = () => {
      //     setIsSmallScreen(window.innerWidth < 768);
      //   };
    
      //   window.addEventListener("resize", handleResize);
    
      //   // call handleResize once on component mount
      //   handleResize();
    
      //   // remove event listener on component unmount
      //   return () => {
      //     window.removeEventListener("resize", handleResize);
      //   };
      // }, []);
    return (
   
    <>
   
   <div className="container-fluid cc">
  <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5>Blog Frame</h5>
      <img src={me2} className="imgg"/>
      <p id="p-foot"> This is the page where you can read a blog which you wants.</p>
      </div>

      <div className="col-2">
        <h5>Our Products</h5>
        <ul className="nav flex-column">
        <li className="mb-2">Educational Blogs</li>
          <li className="mb-2">Food Blogs</li>
          <li className="mb-2">Entertainment Blogs</li>
          <li className="mb-2">Health Blogs</li>
          <li className="mb-2">News blogs</li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Policy info</h5>
        <ul className="nav flex-column">
        <li className="mb-2">Privacy Policy</li>
        
          <li className="mb-2">Terms of Use</li>
          <li className="mb-2">Report Abuse & Takedown Policy</li>
          <li className="mb-2">FAQ</li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Please leave a Message to us</h5>
          <h6 id="h6-foot">Monthly digest of whats new and exciting from us.</h6>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Write Here</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Give your Suggestion"  value={email}
            onChange={(e) => setEmail(e.target.value)}/>



            <button className="btn2" id="bt" type="button" onClick={handleChange}>Subscribe</button>

            
          </div>
        </form>
      </div>
    </div>

  </footer>
</div>

<hr/>
<nav className="navbar fixed-bottom navbar-light bg-light ft">
{/* <nav
        className={`navbar ${isSmallScreen ? "" : "fixed-bottom"} navbar-light bg-light ft`}
      > */}
  <div className="container-fluid" id="ft-cont">
  <h6>© 2022 by Blog Frame. All rights reserved.</h6>
      <h6 style={{marginLeft:"27em" }} id="foot-h6">Created By Anju Vishwakarma 💓</h6>
      <ul className="list-unstyled d-flex">
       
         <li className="ms-3"><a href="https://www.linkedin.com/in/anju-vishwakarma-63531a23b/"><img src={ln} height="30" width="30"/></a></li>
        <li className="ms-3"><a href="https://github.com/0123anjuvish"><img src={git} height="30" width="30"/></a></li>
        <li className="ms-3"><a href="https://www.instagram.com/vishanju0123/"><img src={insta} height="30" width="30"/></a></li>
        <li className="ms-3"><a href=""><img src={tw} height="30" width="30"/></a></li>
      </ul>
  </div>
</nav>




    </>
    );
  }
  
  export default Footer;

 
