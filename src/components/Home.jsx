import React from "react";
import Header from './Header'
import './Styles/Home.css'
import timelapse from '../assets/SpeedSkating.mp4'

export default function Home() {

    return (
    <div className="Home">
        <video src={timelapse} autoPlay loop muted id="timelapse"/>
        <div className="overlay">
          <div className="mainHome">
            <div className="schedule"></div>
            <div className="selection">
              <div className="option">
                <h1>Tutorials</h1>
              </div>
              <div className="option">
                <h1>Volunteer</h1>
              </div>
            </div>
          </div>
        </div>
        <Header />
    </div>
  );
}