import React from "react";
import Header from "../Header";
import '../Styles/home.css';
import { NavLink } from "react-router-dom";
function Home() {
    return (
     
    <>


    
    <Header/>
    <div></div>
  
  <div className="container cc1"><h4 className="home-h4">Some Popular Blogs</h4></div>

  <div className="card-group">
  <div className="card">
    <img src="https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top-1" alt="yoga"/>
    
    <div className="card-body">
      <h5 className="card-title">Yogasan</h5>
      <p className="card-text">Yoga has become a global phenomenon over the last several decades. What started out thousands of years ago in the East as a meditative practice has now evolved into a modern lifestyle craze that generates billions of dollars</p>
      <NavLink to="/health">
                    <span className="edu-btn">Continue Reading.....</span>
                  </NavLink>
    </div>
   
  </div>
 
  <div className="card" >
    <img src="https://www.chefkunalkapur.com/wp-content/uploads/2021/05/cheese-cake-2-scaled-e1635216358218-1300x881.jpg?v=1620792048" className="card-img-top-1" alt="cheeseCake"/>
   
    <div className="card-body">
      <h5 className="card-title">Cheese Cake</h5>
      <p className="card-text">This creamy, soft and egg-free New York Style Cheesecake recipe is a favorite among my friends and family. When served with my simple chocolate sauce, this elegant dessert is both beautiful and delicious!",
      </p>
      <NavLink to="/recipe">
                    <span className="edu-btn">Continue Reading.....</span>
                  </NavLink>
    </div>
   
  </div>
  <div className="card">
    <img src="https://wallpapercave.com/dwp1x/wp10338144.jpg" className="card-img-top-1" alt="web-series"/>
   
    <div className="card-body">
      <h5 className="card-title">Money-Heist</h5>
      <p className="card-text">This year, the makers released the fourth season of Money Heist. It received great reviews from critics and fans all over the world.it appears like Professor Sergio, the show’s mastermind has failed this time because he is holding shackles </p>
      <NavLink to="/etn">
                    <span className="edu-btn">Continue Reading.....</span>
                  </NavLink>
    </div>
   
  </div>
  <div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2G57LKxiYM5XMiHPa-9ccxpfF4NGQKSrJg&usqp=CAU" className="card-img-top-1" alt="Web-Development"/>
   
    <div className="card-body">
      <h5 className="card-title">Web-Development</h5>
      <p className="card-text">The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks. </p>
      <NavLink to="/edu">
                   Continue Reading.......
                  </NavLink>
    </div>
  
  </div>
</div>
    

    
    </>
    );
  }
  
  export default Home;