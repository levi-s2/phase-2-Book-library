import React from "react";
import { NavLink } from "react-router-dom" ;
import "./NavBar.css";

function NavBar() {
    
    return (
        <nav>
            <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Books">Books</NavLink>
            <NavLink to="/Request">Request</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;



