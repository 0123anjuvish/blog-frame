import React from "react";
import '../Styles/pages.css';


import mee from '../../Images/mee.jpg';
import inf from '../../Images/inf.jpg'
function About() {
    return (
    <>
    

<div class="card-header"><h3>About </h3></div>


<div class="c1">
  <div class="row">
    <div class="col">
    
    <figure class="figure">
  <img src={mee} class="figure-img img-fluid rounded c1img" alt="..."/>
 
</figure>

    </div>
    <div class="col">
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

<div class="card-group">
  <div class="card">
    <img src={inf} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">What we serve</h5>
      <p class="card-text">Here we are posting various types of posts you can read everything in one page.</p>
     
    </div>
  </div>
  <div class="card">
    <img src={inf} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Delight</h5>
      <p class="card-text">Deliver resonant content that reflects your message, regardless of its language.</p>
     
    </div>
  </div>
  <div class="card">
    <img src={inf} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Learning</h5>
      <p class="card-text">We are trying to learning makes you feel fun and enjoy together</p>
      
    </div>
  </div>
</div>


</div>

   
    </>
    );
  }
  
  export default About;