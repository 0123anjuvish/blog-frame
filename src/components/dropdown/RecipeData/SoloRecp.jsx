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

<div className="rcpi-cont">
      <div className="row">
        <div className="col-10">
          <h3 id='h3'>{recipe.title}</h3>
        </div>
     
        <div className="col-4 rec-col">

        <div  className='cont-rec'>
  <div className="row align-items-start">
    <div className="col" id="crd" style={{marginLeft:"1em",fontWeight:"bold"}}>
     Time: <MdAlarm/> {recipe.time}
    </div>
    <div className="col" id="crd1" style={{marginLeft:"5em",fontWeight:"bold"}}>
     Quantity: <BiDish/> Serves 4
    </div>
   
  </div>
 
</div>

          <img src={recipe.img}  height={"360px"} width={"500px"} className="rec-img" />
         
          <div className="row "style={{margin:"1em 0 0 5em"}}>
    <div className="col" id ="rcp-rw" >
   <h6 id="rcp-col">Ratings:<span><RatingStars/> </span>
    </h6>
    </div>
    <div className="col" id ="rcp-rw">
    <h6 id="rcp-col">Like Us:     <LikeButton/></h6>
    </div>
    
  </div>
  <h4 className='h4-rec' id='h4-rec'>About Recipe..</h4>
          <div><p id="p-rec">{recipe.detail}</p></div>
         
        </div>
        <div className="col-6" id="rcp-col-6">
      
<div className='detail-head-div'>
<h4 className='detail-head1'><GiBladeFall/></h4>
    <h4 className='detail-head'>  Directions</h4></div>
        
          <ReactPlayer controls url={recipe.vid} className="video" id="rcp-vid" style={{borderRadius:"10px"}}/>
          
          <br />
          
          <div className='step-div'>
            <h4 className='h4-rec' id='h4-rec1'>Ingredients</h4>
            <p id="p-rec1">{recipe.ing}</p>
          </div>
          <div className='step-name' >
            <h4 className='h4-rec' id='h4-rec2'>Methods</h4>
            <p id="p-rec2">{recipe.steps}</p>
          </div>
        </div>
        <Comment/>
      </div>
    </div>
 










</>
  )
}

export default SoloRecp;
