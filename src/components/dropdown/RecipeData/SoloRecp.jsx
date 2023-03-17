import React from 'react';
import list2 from './recipeDetails';
import { useParams } from "react-router-dom";
import '../../Styles/solo.css';
import { MdAlarm } from "react-icons/md";
import { BiDish } from "react-icons/bi";

import { GiBladeFall } from "react-icons/gi";
import ReactPlayer from 'react-player';
import RatingStars from '../Rating';
import LikeButton from '../Like';
import Comment from '../../comment';
const SoloRecp = () => {
    const { id } = useParams();

    const recipe = list2.find((item) => item.id === parseInt(id));
  
    if (!recipe) {
      return <div>Recipe not found</div>;
    }
    // console.log("anju",list2.item);
  return (
<>

<div className="rcp-cont">
      <div className="row">
        <div className="col-10">
          <h3>{recipe.title}</h3>
        </div>
     
        <div className="col-4 rec-col">

        <div class="container">
  <div class="row align-items-start">
    <div class="col" style={{marginLeft:"1em",fontWeight:"bold"}}>
     Time: <MdAlarm/> {recipe.time}
    </div>
    <div class="col" style={{marginLeft:"5em",fontWeight:"bold"}}>
     Quantity: <BiDish/> Serves 4
    </div>
   
  </div>
 
</div>

          <img src={recipe.img}  height={"360px"} width={"360px"} className="rec-img" />
          {/* <br /> */}
          <div class="row ">
    <div class="col">
   <h6>Ratings:<span><RatingStars/> </span>
    </h6>
    </div>
    <div class="col">
    <h6>Like Us:     <LikeButton/></h6>
    </div>
    
  </div>
  <h4>About Recipe..</h4>
          <div><p>{recipe.detail}</p></div>
          <Comment/>
        </div>
        <div className="col-6" >
      
<div className='detail-head-div'>
<h4 className='detail-head1'><GiBladeFall/></h4>
    <h4 className='detail-head'>  Directions</h4></div>
         {/* <div  > */}
          <ReactPlayer controls url={recipe.vid} className="video" style={{borderRadius:"10px"}}/>
          {/* </div> */}
          <br />
          
          <div className='step-div'>
            <h4>Ingredients</h4>
            <p>{recipe.ing}</p>
          </div>
          <div className='step-name' >
            <h4>Methods</h4>
            <p>{recipe.steps}</p>
          </div>
        </div>
      </div>
    </div>
 










</>
  )
}

export default SoloRecp;
