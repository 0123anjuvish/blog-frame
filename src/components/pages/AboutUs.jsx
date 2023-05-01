import React from "react";
import '../Styles/pages.css';


import mee from '../../Images/mee.jpg';
import inf from '../../Images/inf.jpg'
function About() {
    return (
    <>
    

<div className="card-header"><span id="abt">About </span></div>


<div className="c1">
  <div className="row"id="abt-rw">
    <div className="col"id="abt-col1">
    
    <figure className="figure">
  <img src={mee} className="figure-img img-fluid rounded c1img" alt="..."/>
 
</figure>

    </div>
    <div className="col"id="abt-col2">
    <h4 className="abth4">Meet the Face behind this Post</h4>
    <p className="line"> Committed and goal-oriented science graduate and diploma holder in cs looking to pursue a career in the Frontened developer.
       Possess excellent knowledge in HTML, CSS, Javascript, React. Ability to learn things quickly and capable of working in 
       a fast-paced and team-driven environment.
       </p>
       <p className="line">At Phrase, we believe when you unlock language, you unlock opportunity.</p>
       <p className="line">That’s why we’re pushing the boundaries of language technology through automation and Fun
         to power high quality, scalable, and fast localization for teams of any size</p>
         <p className="line">We aim to open the door to global business by giving everybody access to the content they need in the language they speak.</p>
    </div>
  
  </div>
</div>
<div className="c3">

<div className="card-group">
  <div className="card">
    <img src={inf} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">What we serve</h5>
      <p className="card-text">Here we are posting various types of posts you can read everything in one page.</p>
     
    </div>
  </div>
  <div className="card">
    <img src={inf} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Delight</h5>
      <p className="card-text">Deliver resonant content that reflects your message, regardless of its language.</p>
     
    </div>
  </div>
  <div className="card">
    <img src={inf} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Learning</h5>
      <p className="card-text">We are trying to learning makes you feel fun and enjoy together</p>
      
    </div>
  </div>
</div>


</div>

   
    </>
    );
  }
  
  export default About;