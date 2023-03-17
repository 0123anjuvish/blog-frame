import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink, useParams } from "react-router-dom";
import eduList2 from './edudetail';
import '../../Styles/solo.css';
import RatingStars from '../Rating';
import LikeButton from '../Like';
import Comment from '../../comment';

const SoloHlt = () => {

   
    const { id } = useParams();

     const edu = eduList2.find((item) => item.id === parseInt(id));
   console.log(edu,"anjuuuuuuu");
  return (
    <>
   
   <div className="edu-cont-1">
  <div className="row">
    <div className="edu-col1">
     <div >
       <h5 className='h55-edu'> What is {edu.title}?</h5>
     </div>
     <div className='edu-p'>
        {edu.what}
     </div>
     <div className='edu-p' >
<h5 className='h55-edu'>Top 5 Best Platform for it:</h5>
{edu.course}
</div>
     <div className='edu-p'>
        <h5 className='h55-edu'>How to do it?/Benifits or Tips::</h5>
        {edu.ben}
     </div>
    <div className='edu-p'>
        <h5 className='h55-edu'>Types of {edu.title}</h5>
        {edu.type}
    </div>
     <div className='edu-p'>
        <h5 className='h55-edu'>Importance of {edu.title}</h5>
        {edu.imp}
     </div>
     <div className="sbs-edu">
        If you like to read our page please like and comment us, it would be benificial for us.
        <div className='edu-rt'>
          Rate Us:<span className='rt'><RatingStars/></span>
          Like Us:<span className='lk'><LikeButton/></span>
        </div>
     </div>
   <Comment/>
    </div>
    <div className="edu-col2">
     
<div >
<ReactPlayer controls url="https://www.youtube.com/watch?v=MtC4NBYT7PQ" style={{width: "487px", height: "360px"}} className="edu-vid" />
</div>

<div className="card" >
  <img src="https://images.pexels.com/photos/1755087/pexels-photo-1755087.jpeg?auto=compress&cs=tinysrgb&w=600" className="cd-img-top" alt="..."/>
  <div className="card-body-edu">
    <h5 className="card-title">Entertainment blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
   
  </div>
  <NavLink to="/etn"> <button type="button"className="btn btn-primary" style={{margin:"8em"}}>Click here</button></NavLink>
</div>
<div className="card" >
  <img src="https://images.pexels.com/photos/6287210/pexels-photo-6287210.jpeg?auto=compress&cs=tinysrgb&w=600" className="cd-img-top" alt="..."/>
  <div className="card-body-edu">
    <h5 className="card-title">Recipe blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
  
  </div>
  <NavLink to="/edu"> <button type="button"className="btn btn-primary" style={{margin:"8em"}}>Click here</button></NavLink>
</div>
<div className="card" >
<img src="https://thumbs.dreamstime.com/b/health-blog-young-doctor-headphones-sitting-table-laptop-webinars-online-consultation-185046861.jpg" className="cd-img-top" alt="..."/>
  
 
  <div className="card-body-edu">
    <h5 className="card-title">Health blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
   
  </div>
  <NavLink to="/edu"> <button type="button"className="btn btn-primary" style={{margin:"8em"}}>Click here</button></NavLink>
</div>
    </div>
   
  </div>
</div>
   
    </>
  )
}

export default SoloHlt
