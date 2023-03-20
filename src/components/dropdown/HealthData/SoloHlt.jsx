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
     <div className='hlt-div' >
       <h5 className='h55'> What is {hlth.title}?</h5>
    
     </div>
     
     <div className='hlt-div'>
        {hlth.what}
        <img src= {hlth.img}  height={"400px"} width={"600px"} className="hlt-img"/>
     </div>
     <div className='hlt-div'>
<h5 className='h55'>Symptoms/Uses</h5>
{hlth.sym}
</div>
     <div className='hlt-div' >
        <h5 className='h55'>Causes/Benifits</h5>
        {hlth.cause}
     </div>
    
     <div className='hlt-div'>
        <h5 className='h55'>Prevention/Precautions</h5>
        {hlth.treat}
        <h5 className='h55'>Watch this Video to help you</h5>
        <ReactPlayer controls url ={hlth.vid} className='hlt-vid1' />
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
<ReactPlayer controls url="https://www.youtube.com/watch?v=SeWVw5NPokc" style={{width: "487px", height: "470px"}} className="hlt-vid" />
</div>

<div className="card" style={{width: "487px", height: "450px",marginTop:"2em"}}>
<img src="https://img.freepik.com/free-photo/open-pages-book-e-book-online-learning-graphic-concept_53876-127665.jpg?w=900&t=st=1678953825~exp=1678954425~hmac=6b337ab9be3f8f4fbe4b9ebfad9e227bfee898add56058d061f93c63347864d9" className="cd-img-top" alt="..."/>
  

  <div className="card-body">
    <h5 className="card-title">Educational blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
    <NavLink to="/edu" ><button type="button"className="btn btn-primary" style={{margin:"6em"}}>Click here</button></NavLink>
  </div>
</div>
<div className="card" style={{width: "487px", height: "450px",marginTop:"2em"}}>
<img src="https://images.pexels.com/photos/6287210/pexels-photo-6287210.jpeg?auto=compress&cs=tinysrgb&w=600" className="cd-img-top" alt="..."/>
  
  <div className="card-body">
    <h5 className="card-title">Recipe blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
    <NavLink to="/recipe" ><button type="button"className="btn btn-primary" style={{margin:"6em"}}>Click here</button></NavLink>
  </div>
</div>
<div className="card" style={{width: "487px", height: "450px",marginTop:"2em"}}>

  <img src="https://images.pexels.com/photos/1755087/pexels-photo-1755087.jpeg?auto=compress&cs=tinysrgb&w=600" className="cd-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Entertainment blog</h5>
    <p className="card-text">Want to read my popular blog pages you have to visit this page</p>
    <NavLink to="/etn" ><button type="button"className="btn btn-primary" style={{margin:"6em"}}>Click here</button></NavLink>
  </div>
</div>

    </div>
   
  </div>
</div>
   
    </>
  )
}

export default SoloHlt
