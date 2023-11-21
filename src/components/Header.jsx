import React from "react";
import "./Styles/Header.css";
import { Link } from "react-router-dom";


export default function Header() {

    function handleMenu(){
        let menu = document.getElementById("menu");
        let nav = document.getElementById("navigation");
    
        let list = menu.attributes.class.value.split(' ');
        let list2 = nav.attributes.class.value.split(' ');

        if(list.includes('inactive')){
            menu.attributes.class.value = 'material-symbols-sharp';
            nav.attributes.class.value = 'nav inactive';
        }
    
        if(list2.includes('inactive')){
            menu.attributes.class.value = 'material-symbols-sharp inactive';
            nav.attributes.class.value = 'nav';
        }
    }

    function changeSite(){
        window.open("https://www.frederictonspeedskating.com/")
    }

    return (
    <div className="Header">
        <Link to="/">
            <div className="iconHead" onClick={()=>{console.log("OK")}}></div>
        </Link>
        <ul className="nav inactive" id="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="">Directions</Link></li>
            <li><Link to="/tutorial">Tutorials</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li onClick={changeSite}><Link to="">About</Link></li>
            <li id="closeNav" className="large"><Link to="" onClick={handleMenu}>Close</Link></li>
        </ul>
        <span id="menu" className="material-symbols-sharp large" onClick={handleMenu}>
            menu
        </span>
    </div>
  );
}