import React, { useState } from 'react';
import './Styles/modal.css';
import Login from './Login';
import login from '../Images/login.png';
import { NavLink } from 'react-router-dom';
import Contact from './pages/ContactUs';
function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className='btn2' onClick={toggleModal}>Sign In</button>
      {isOpen && (
        <div className="modal">
          
          <div className="modal-content">
         
            <div className="frm" >
            <button onClick={toggleModal} className ="cls-btn">X</button>
           <div  className='frm-div' >  Login
            <img src ={login}/></div>
         
          </div>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <div className='reg-div'>
      Don't have an account? 
      <NavLink to= "/contact" onClick={toggleModal}> Register here..</NavLink>
      </div>
           <Login/>

          
           
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

