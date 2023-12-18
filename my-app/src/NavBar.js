import React from "react";
import { NavLink } from "react-router-dom" ;
import "./NavBar.css";

function NavBar() {
    
    return (
        <nav>
            <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Favorites">Favorites</NavLink>
            <NavLink to="/About">About</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;



