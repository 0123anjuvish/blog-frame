import React from "react";
import { useState } from "react";
import ln from "../../Images/ln.png";
import git from "../../Images/git.png";
import insta from "../../Images/insta.png";
import tw from "../../Images/tw.png";



function Contact() {

  const[fName,setfName] = useState(" ");
  const[lName,setlName] = useState(" ");
  const[pswd,setPswd] = useState(" ");
  const[email,setEmail] = useState(" ");
  const[msg,setMsg] = useState("");
  const[showSuccessMsg,setShowSuccessMsg] = useState(false);

  const handleChange = () => {
    localStorage.setItem("Fname",fName);
    localStorage.setItem("Lname",lName);
    localStorage.setItem("Pswd",pswd);
    localStorage.setItem("Email",email);
    localStorage.setItem("msg",msg);
    setShowSuccessMsg(true);
    alert("Thanks for Joining and your valuable feedback");
    setfName("");
    setlName("");
    setEmail("");
    setPswd("");
    setMsg("");
  };

  return (
    <>
      <div className="container c1">
        <h3>Let me know what's on your mind</h3>
        <h4>If you like our posts,</h4>
        <h4>Subscribe to our newsletter</h4>

        <div className="container overflow-hidden">
          <div className="row gy-5">
            <div className="col-6">
              <div className="p-3 border bg-light">
                <label>First-Name</label>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  placeholder="Enter your First Name here"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                <label>Last-Name</label>
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  placeholder="Enter your Last Name here"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                <label>Email</label>
                <input
                  type="text"
                  aria-label="Email Id"
                  className="form-control"
                  placeholder="Enter your Email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
                <label>Password</label>
                <input
                  type="password"
                  aria-label="Review"
                  className="form-control"
                  placeholder="Enter your password"
                  value={pswd}
                  onChange={(e) => setPswd(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="p-3 border bg-light">
                <label>Message</label>
                <textarea
                  aria-label="Message"
                  className="form-control"
                  placeholder="Leave us a message here"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

<div className="btndiv">
 
  <button className=" btn join-btn " type="button" onClick={handleChange}>Button</button>
</div>
    </div>
   
    <nav class="navbar fixed-bottom navbar-light bg-light ft">
  <div class="container-fluid">
  <h6>© 2022 by Blog Frame,Inc. All rights reserved.</h6>
      <h6 style={{marginLeft:"27em" }}>MADE FOR BHARAT 💓</h6>
      <ul class="list-unstyled d-flex">
       
         <li class="ms-3"><img src={ln} height="30" width="30"/></li>
        <li class="ms-3"><img src={git} height="30" width="30"/></li>
        <li class="ms-3"><img src={insta} height="30" width="30"/></li>
        <li class="ms-3"><img src={tw} height="30" width="30"/></li>
      </ul>
  </div>
</nav>
    </>
    );
  }
  
  export default Contact ;

 