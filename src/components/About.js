import React from "react";
import bgImg from "../images/about-background.jpg";


export default function About() {
    return (
        <div className="about--body">
            <img className="about--bg-img" src={bgImg}></img>
            <h3 className="about--headline">Dont squeeze in a sedan when you could relax in a van.</h3>
        </div>
    )
}