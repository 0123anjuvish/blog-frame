import React from 'react';
import ReactPlayer from 'react-player';
import { NavLink, useParams } from "react-router-dom";
import etnList2 from './etndetail';
import RatingStars from '../Rating';
import LikeButton from '../Like';
import Comment from '../../comment';
const SoloEtn = () => {
    const { id } = useParams();
// console.log(etnList2);
console.log(id,"anju");
// console.log(etnList2.map(item => item.id));
const etn = etnList2.flat().find((item) => item.id === parseInt(id));

    
    console.log(etn,"anjuuuuuu");
  return (
    <>
   <div className="etn-cont-1">
  <div className="row">
    <div className='etn-col1'>
  <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={etn.img} alt="" />
        </figure>
        <div className="card-content">
          <h3 className="title"> {etn.Title}</h3>
          <p className=""></p>
          <p ><span className="card-text-etn">Based on:</span> {etn.plt}</p>
          <p ><span className="card-text-etn" >Released on:</span> {etn.date}</p>
          <p ><span className="card-text-etn">Directed By:</span> {etn.dir}</p>
          <p ><span className="card-text-etn">Rating:</span> {etn.rate} / 10</p>
         
         
        </div>
      </div>
    </section>
    <div >
<h5 className='h55'>Star-Cast</h5>
{etn.cast}
<img src={etn.imgg} className="imgg-etn"/>
</div>
     <div >
        <h5 className='h55'>Story</h5>
        {etn.rev}
     </div>
     <div >
        <h5 className='h55'>Watch a trailer</h5>
       <ReactPlayer controls url={etn.vid} />
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
    
    <div className="etn-col2">
     
<div >
<ReactPlayer controls url="https://www.youtube.com/watch?v=6ttZUBUXxMg" style={{width: "487px", height: "360px"}} className="etn-vid" />
</div>

<div className="card" >
  <img src="https://thumbs.dreamstime.com/b/health-blog-young-doctor-headphones-sitting-table-laptop-webinars-online-consultation-185046861.jpg" className="cd-img-top" alt="..."/>
  
  <div className="card-body">
    <h5 className="card-title">Health blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
    <NavLink to="/health" className="btn btn-primary">Click here</NavLink>
  </div>
</div>
<div className="card" >
  <img src="https://images.pexels.com/photos/6287210/pexels-photo-6287210.jpeg?auto=compress&cs=tinysrgb&w=600" className="cd-img-top" alt="..."/>
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

export default SoloEtn
