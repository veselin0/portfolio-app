import React from "react";
import "./Main.css"
import Eating from "./eating_ice-cream_monochromatic.png";

const Main = () => {
    return (
        <div className="main">
            <h1>Need a website?</h1>
            <img alt="img" src={Eating}/>
            <p>Hi there! My nick is <strong>kurtsunami</strong> and I am a junior website developer.
            There is not much in my portfolio for now, so I suggest cooperation
            for an icecream.
            </p>
            <button>Call me!</button>
        </div>
    );
};

export default Main;