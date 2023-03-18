import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/login.css'
import hList from "./HealthData/hltdata";
import { NavLink } from "react-router-dom";
function Health() {
  return (
    <>
     
      <div className=" hlt-cont">
      
        <div>
          <div className="hlt-head">Health Issue</div >
        </div>
        <div className="row row-hlt">
          {hList[0].map((item) => (
            <div className="col" key={item.id}>
             
              <div className="cds-hlt">
                  <div className="card-title-hlt">{item?.title}</div>

                  <img src={item?.img} alt="" />
                  

                  <div className="card-desc-hlt">
                   
                    <p> {item?.detail}</p>

                    <NavLink to={`/health/${item.id}`}>
                      <span className="rcp-btn">Continue Reading.....</span>
                    </NavLink>
                  </div>
                </div>
              
            </div>
          ))}
        </div>

       
        <div>
          <div className="hlt-head">Fitness or Wellness</div >
        </div>
        <div className="row row-hlt">
          {hList[1].map((item) => (
            <div className="col" key={item.id}>
             
              <div className="cds-hlt">
                  <div className="card-title-hlt">{item?.title}</div>

                  <img src={item?.img} alt="" />
                  

                  <div className="card-desc-hlt">
                    
                    <p> {item?.detail}</p>

                    <NavLink to={`/health/${item.id}`}>
                      <span className="rcp-btn">Continue Reading.....</span>
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
  
  export default Health;