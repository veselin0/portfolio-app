import React from "react";
import "./Header.css";
import logoURL from "./logo.png";

const AppHeader = ({liked, allPosts}) =>  {
    return (
        <div className="header">
            <img alt="img" src={logoURL}/>
            <button className="about-me">About Me</button>
            <button className="portfolio">Portfolio</button>
            <button className="contact">Contact</button>
            <button className="dropdown">Language</button>
        </div>
    )
}

export default AppHeader;