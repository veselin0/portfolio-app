import React from "react";
import "./AboutMe.css"
import course from "./analytics_process_monochromatic.png";
import charged from "./innovation__monochromatic.png";
import practice from "./consulting_monochromatic.png";

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <h2>About me</h2>
            <img id="A" alt="img" src={course} />
            <p id="a">I am passing a course "Website developer"</p>
            <img id="B" alt="img" src={charged}/>
            <p id="b">I am fully charged with theory</p>
            <img id="C" alt="img" src={practice} />
            <p id="c">I can't wait to jump right into the practice</p>
        </div>
    );
};

export default AboutMe;