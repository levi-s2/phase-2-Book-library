import React from "react";
import FavoriteCard from "./FavoriteCard"
import NavBar from "./NavBar";

function Favorites({ allFavorites }) {

    return (
        <div>
        <header>
            <NavBar />
        </header>
        <h1 style={{ color: "white"}}>Favorite Books</h1>
        <div>
            {allFavorites.map(f => {
        return (
        <FavoriteCard f={f}/>)
    })}
        </div>
        </div>
    )
}

export default Favorites;