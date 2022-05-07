import React, { Component} from "react";
import Cards from "./data/projectCards.json";
import "../styles.css";

class Projects extends Component {
  render () {
    return (
      <div>
        <br/>
        <h2 className="moreLeft">Web Development Projects</h2>
        {Cards.map ((cardDetail, index) => {
          return <div key={index}>
          <div className="projectWrapper">
          <h4>{cardDetail.cardname}</h4>
          <img className="portfolioImg" src={cardDetail.image} alt="Project Card" />
          <a className="contactLink" href={cardDetail.livelink} target="_blank" rel="noreferrer">See It Live</a>
          <br/><br/>
          <a className="contactLink" href={cardDetail.codelink} target="_blank" rel="noreferrer">View the Code</a>
          </div>
          </div>
        })}
      </div>
    )
  }
}

export default Projects;