import React from "react";
import "./Styles/Header.css";
import { Link } from "react-router-dom";


export default function Header() {

    return (
    <div className="Header">
        <div className="iconHead" onClick={()=>{console.log("OK")}}></div>
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chat">Schedule</Link></li>
            <li><Link to="/art">Tutorials</Link></li>
            <li><Link to="/book">Volunteer</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
  );
}