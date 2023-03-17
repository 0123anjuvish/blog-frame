import React, {useState,useParams}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import etnList from "./EtnData/etndata";
function Entertainment() {
 
   
  return (
    <>
    
    <div className=" etn-cont">
      
      <div>
        <div className="etn-head">Popular Movies in 2022-2023</div >
      </div>
      <div className="row row-etn">
        {etnList[0].map((item) => (
          <div className="col" key={item.id}>
           
            <div className="cds-etn">
                <div className="card-title-etn">{item?.title}</div>

                <img src={item?.img} alt="" />
                

                <div className="card-desc-etn">
                <div className="card-title-etn">Based on: {item?.plt} Movie.</div>
                  <p> {item?.detail}</p>

                  <NavLink to={`/etn/${item.id}`}>
                    <span className="etn-btn">Continue Reading.....</span>
                  </NavLink>
                </div>
              </div>
            
          </div>
        ))}
      </div>

     
      <div>
        <div className="etn-head">Popular OTT Web-Series in 2022-2023</div >
      </div>
      <div className="row row-etn">
        {etnList[1].map((item) => (
          <div className="col" key={item.id}>
           
            <div className="cds-etn">
                <div className="card-title-etn">{item?.title}</div>

                <img src={item?.img} alt="" />
                

                <div className="card-desc-etn">
                  <div className="card-title-etn">Based on: {item?.plt} Series.</div>
                  <p> {item?.detail}</p>

                  <NavLink to={`/etn/${item.id}`}>
                    <span className="etn-btn">Continue Reading.....</span>
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
  
  export default Entertainment;