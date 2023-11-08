import React from "react";
import "./Styles/Header.css";
import { Link } from "react-router-dom";


export default function Header() {

    return (
    <div className="Header">
        <Link to="/">
            <div className="iconHead" onClick={()=>{console.log("OK")}}></div>
        </Link>
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Directions</Link></li>
            <li><Link to="/">Tutorials</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/">About</Link></li>
        </ul>
    </div>
  );
}