import React from "react";
import "../styles.css";
import profile_pic from "../images/profile_pic.png";

function Home() {
  return (
    <div className="jumbotron jumbotron-fluid"> 
    <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
    <p className="headerText">
    <h1>Hello</h1>  
       My name is Sasan or everyone call me Sas! <br/>
       I studied Aerospace engineering but my career went somewhere completely different! Logistics.I am working as a receiving supervisor in a Medical company at the moment. <br/>
       Now learning how to code, is my new challenge and hopefully new career.<br/>
    </p> 
    </div>
    </div>
  );
}

export default Home;