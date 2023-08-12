import React from "react";
import bgImg from "../images/home-background.jpg";


export default function Home() {
    return (
        <div className="home--body">
            <img className="home--bg-img" src={bgImg} />
            <div className="home--content">
                <h3 className="home--headline">You got the travel plans, we got the travel vans.</h3>
                <p className="home--description">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className="find-van-btn">Find your van</button>
            </div>
        </div>
    )
}