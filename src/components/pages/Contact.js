import React from "react";
import github_icon from "../images/github_logo.png";
import linkedIn_icon from "../images/linkedin.png";
import email_icon from "../images/email_icon.png";
import pdfIcon from "../images/PDF.png";
import Resume from "../images/Sasan_Sahami_Resume.PDF";

function Contact(props) {
  return (
    <div className="moreLeft">
      <h1>Contact Me</h1>
    <p>Feel free to reach out! I look forward to connecting with you.</p>
   <p><img className="contactImg" src={ pdfIcon } alt="github icon" /><a className="contactLink" href={Resume}>Click here to download my resume</a></p>
    <img className="contactImg" src={ github_icon } alt="github icon" /><a className="contactLink" href="https://github.com/sasansinson" target="_blank" rel="noreferrer"> Github</a><br/>
    <img className="contactImg" src={ linkedIn_icon } alt="linkedIn icon" /><a className="contactLink" href="https://www.linkedin.com/in/sasan-sahami-71aa017b/" target="_blank" rel="noreferrer"> LinkedIn</a><br/>
    <img className="contactImg" src={ email_icon } alt="email icon" /><a className="contactLink" href="mailto:sas.sahami@gmail.com">Email me</a>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    </div>
  );
}

export default Contact;