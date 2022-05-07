//header will go here
import "./styles.css";
import React from "react";
import profile_pic from "./images/profile_pic.png"

function HeaderInfo() {
    return (
        <div className="jumbotron jumbotron-fluid">   
        <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
        <div className="headerText">
        <h1>Hello</h1>
        My name is Sasan or everyone call me Sas! <br/>
        I studied Aerospace engineering but my career went somewhere completely different! Logistics.I am working as a receiving supervisor in a Medical company at the moment.<br/> 
        Now learning how to code, is my new challenge and hopefully new career.<br/>
             </div>
             </div>
             </div>
    );
}

export default HeaderInfo;