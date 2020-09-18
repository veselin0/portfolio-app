import React from "react";
import "./Header.css";
import logoURL from "./logo.png";
import { Link } from "react-router-dom";

const AppHeader = () =>  {
    return (
        <div className="header">
            <img alt="img" src={logoURL}/>
            <button className="home">{<Link to="/">Home</Link>}</button>
            <button className="about-me">{<Link to="/AboutMe">About Me</Link>}</button>
            <button className="about-you">{<Link to="/AboutYou">About </Link>}</button>
            <button className="portfolio">{<Link to="/Portfolio">Portfolio</Link>}</button>
            <button className="contact">{<Link to="/Footer">Contact</Link>}</button>
        </div>
    )
}

export default AppHeader;