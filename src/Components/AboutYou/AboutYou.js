import React from "react";
import "./AboutYou.css";
import business from "./business.png";
import site from "./site.png";
import money from "./money.png";

const AboutYou = () => {
    return (
        <div className="about-you">
        <h2>About you</h2>
        <img id="business" alt="img" src={business}/>
        <p id="busi" >You own a busiuness</p>
        <img id="site" alt="img" src={site} />
        <p id="sit" >You need a website</p>
        <img id="money" alt="img" src={money} />
        <p id="mon" >You have a limited budget</p>
    </div>
    );
};

export default AboutYou;