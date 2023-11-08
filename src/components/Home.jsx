import React, { useState, useEffect } from "react";
import Header from './Header'
import './Styles/Home.css'
import timelapse from '../assets/SpeedSkating.mp4'
import { Link } from "react-router-dom";

export default function Home() {

  
  const [date, setDate] = useState(new Date());

  // Update the date state every second
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer)
    }
  });

  // Get the current day of the week
  // const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  // const day = days[date.getDay()];

  // Get the current time
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return (
    <div className="Home">
        <video src={timelapse} autoPlay loop muted id="timelapse"/>
        <div className="overlay">
          <div className="mainHome">
            <div className="schedule">
              <h2>Operation Days</h2>
              <p>Tuesday:  5:30 - 7:00pm</p>
              <p>Thursday:  5:30 - 7:00pm</p>
              <p>Time: {time}</p>
            </div>
            <div className="selection">
              <div className="option">
                <h1>Tutorials</h1>
              </div>
              <Link to="/volunteer">
                <div className="option">
                  <h1>Volunteer</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Header />
    </div>
  );
}