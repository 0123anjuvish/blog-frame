import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import msc from'../Images/msc.jpg';
import fit from '../Images/fit.jpg';
import rcp from '../Images/rcp.jpg';
function Header() {
  useEffect(() => {
   
    const carousel = document.querySelector('.carousel');
    const carouselInstance = new window.bootstrap.Carousel(carousel, {
      interval: 2000,
      pause: 'hover'
    });
  }, []);
    return (
     <>
     
      

      

        <div>
  <span className="tag">A Multipurpose Blog-Page</span>
  <div class="wrapper two">
        <div class="neon">
            <h3>Welcome to our Page</h3>
        </div>
    </div>
 

</div>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={fit} className="d-block w-100" alt="First slide"/>
          <div className="carousel-caption">
            <h4 className="home-h44">
              Wellness & Fitness blogs
            </h4>
            <p>Here you can read our blogs this help to know about major part of fitness and wellness</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={msc} className="d-block w-100" alt="Second slide"/>
          <div className="carousel-caption">
            <h4 className="home-h44">Entertainment blogs</h4>
            <p>Here you can read our blogs this helps you to know latest movies and webseries reviews.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={rcp} className="d-block w-100" alt="Third slide"/>
          <div className="carousel-caption">
            <h4 className="home-h44">Recipe blogs</h4>
            <p>Here you can read our blogs this help to know about some of indian cusins recipe.</p>
          </div>
        </div>
      </div>
    </div>

       
      </>
    );
  }
  
  export default Header;