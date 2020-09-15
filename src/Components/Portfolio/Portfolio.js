import React from "react";
import "./Portfolio.css";
import por from "./por.png";

const Portfolio = () => {
    return (
        <div className="portfol">
            <h2>Portfolio</h2>
            <img alt="img" src={por} />
            <p>At this stage I haven't got much works to show. But I am
            an apprentice of Peter Velkov in his office and rather soon then later
            I shall have a bundle of exciting projects. </p>
        </div>
    );
};

export default Portfolio;