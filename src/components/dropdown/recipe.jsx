import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/dropdown.css";
import list from "./RecipeData/recdata";

import { NavLink } from "react-router-dom";

const Recipe = () => {
  console.log(list.item);

  return (
    <>
      {/* <div className="container">
        <div>
          <h3>SIMPLE RECIPES MADE FOR</h3>
        </div>
        {list.map((rowitem) => (
          <div className="row row1" key={rowitem[0].id}>
            {rowitem.map((item) => (
              <div className="col" key={item.id}>
                <div className="cds">
                  <h4 className="card-title">{item?.title}</h4>

                  <img src={item?.img} alt="" />
                  

                  <div className="card-desc">
                    <h4>Quantity: for {item?.quantity} People.</h4>
                    <p> {item?.detail}</p>

                    <NavLink to={`/recipe/${item.id}`}>
                      <span className="rcp-btn">Continue Reading.....</span>
                    </NavLink>
                  </div>
                </div>
              
              </div>
            ))}
          </div>
        ))}
      </div> */}



       <div className=" rcp-cont">
      
        <div>
          <div className = "rcp-head">Starter</div >
        </div>
        <div className="row row1">
          {list[0].map((item) => (
            <div className="col" key={item.id}>
             
              <div className="cds">
                  <div className="card-title">{item?.title}</div>

                  <img src={item?.img} alt="" />
                  

                  <div className="card-desc">
                    <div>Quantity: for {item?.quantity} People.</div>
                    <p> {item?.detail}</p>

                    <NavLink to={`/recipe/${item.id}`}>
                      <span className="rcp-btn">Continue Reading.....</span>
                    </NavLink>
                  </div>
                </div>
              
            </div>
          ))}
        </div>

       
        <div>
          <div className = "rcp-head">Main-Course</div>
        </div>
        <div className="row row1">
          {list[1].map((item) => (
            <div className="col" key={item.id}>
             
              <div className="cds">
                  <div className="card-title">{item?.title}</div>

                  <img src={item?.img} alt="" />
                  

                  <div className="card-desc">
                    <div>Quantity: for {item?.quantity} People.</div>
                    <p> {item?.detail}</p>

                    <NavLink to={`/recipe/${item.id}`}>
                      <span className="rcp-btn">Continue Reading.....</span>
                    </NavLink>
                  </div>
                </div>
              
            </div>
          ))}
        </div>

       
        <div>
          <div className = "rcp-head">Dessert</div>
        </div>
        <div className="row row1">
          {list[2].map((item) => (
            <div className="col" key={item.id}>
             
              <div className="cds">
                  <div className="card-title">{item?.title}</div>

                  <img src={item?.img} alt="" />
                  

                  <div className="card-desc">
                    <div>Quantity: for {item?.quantity} People.</div>
                    <p> {item?.detail}</p>

                    <NavLink to={`/recipe/${item.id}`}>
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
};

export default Recipe;
