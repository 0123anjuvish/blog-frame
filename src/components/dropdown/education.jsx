import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import eduList from "./EduData/edudata";
import { NavLink } from "react-router-dom";
function Education() {
  

  return (
    <>
      
      <div className=" edu-cont">
      
      <div>
        <div className="edu-head">Technical Education</div >
      </div>
      <div className="row row-edu">
        {eduList[0].map((item) => (
          <div className="col" key={item.id}>
           
            <div className="cds-edu">
                <div className="card-title-edu">{item?.title}</div>

                <img src={item?.img} alt="" />
                

                <div className="card-desc-edu">
                <div className="card-title-edu">Based on: {item?.plt} Movie.</div>
                  <p> {item?.detail}</p>

                  <NavLink to={`/edu/${item.id}`}>
                    <span className="edu-btn">Continue Reading.....</span>
                  </NavLink>
                </div>
              </div>
            
          </div>
        ))}
      </div>

     
      <div>
        <div className="edu-head">Competitive Test</div >
      </div>
      <div className="row row-edu">
        {eduList[1].map((item) => (
          <div className="col" key={item.id}>
           
            <div className="cds-edu">
                <div className="card-title-edu">{item?.title}</div>

                <img src={item?.img} alt="" />
                

                <div className="card-desc-edu">
                  <div className="card-title-edu">{item?.title}</div>
                  <p> {item?.detail}</p>

                  <NavLink to={`/edu/${item.id}`}>
                    <span className="edu-btn">Continue Reading.....</span>
                  </NavLink>
                </div>
              </div>
            
          </div>
        ))}
      </div>

     
     
    </div>


    </>
  );
   


   
    
  }
  
  export default Education;