import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink, useParams } from "react-router-dom";
import hList2 from './hltdetail';
import '../../Styles/solo.css';
import RatingStars from '../Rating';
import LikeButton from '../Like';
import Comment from '../../comment';

const SoloHlt = () => {

   
    const { id } = useParams();

     const hlth = hList2.find((item) => item.id === parseInt(id));
   console.log(hlth,"anjuuuuuuu");
  return (
    <>
   
   <div className="hlt-cont-1">
  <div className="row">
    <div className="hlt-col1">
     <div >
       <h5 className='h55'> What is {hlth.title}?</h5>
     </div>
     <div>
        {hlth.what}
     </div>
     <div >
<h5 className='h55'>Symptoms/Uses</h5>
{hlth.sym}
</div>
     <div >
        <h5 className='h55'>Causes/Benifits</h5>
        {hlth.cause}
     </div>
    
     <div >
        <h5 className='h55'>Prevention/Precautions</h5>
        {hlth.treat}
     </div>
     <div className="sbs">
        If you like to read our page please like and comment us, it would be benificial for us.
        <div className='hlt-rt'>
          Rate Us:<span className='rt'><RatingStars/></span>
          Like Us:<span className='lk'><LikeButton/></span>
        </div>
     </div>
   <Comment/>
    </div>
    <div className="hlt-col2">
     
<div >
<ReactPlayer controls url="https://www.youtube.com/watch?v=SeWVw5NPokc" style={{width: "487px", height: "360px"}} className="hlt-vid" />
</div>

<div className="card" >
  <img src="https://images.pexels.com/photos/1755087/pexels-photo-1755087.jpeg?auto=compress&cs=tinysrgb&w=600" className="cd-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Educational blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
    <NavLink to="/edu" className="btn btn-primary">Click here</NavLink>
  </div>
</div>
<div className="card" >
  <img src="https://img.freepik.com/free-photo/open-pages-book-e-book-online-learning-graphic-concept_53876-127665.jpg?w=900&t=st=1678953825~exp=1678954425~hmac=6b337ab9be3f8f4fbe4b9ebfad9e227bfee898add56058d061f93c63347864d9" className="cd-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Recipe blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
    <NavLink to="/recipe" className="btn btn-primary">Click here</NavLink>
  </div>
</div>

    </div>
   
  </div>
</div>
   
    </>
  )
}

export default SoloHlt
