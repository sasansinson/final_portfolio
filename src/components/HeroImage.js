import "./styles.css";
import React from "react";
import Hero from "./images/sasan.jpg"

function HeroImage() {
    return (
        <img className="hero" src={Hero} alt="Sasn Sahami" />

    );
}

export default HeroImage;