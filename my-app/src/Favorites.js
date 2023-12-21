import React from "react";
import NavBar from "./NavBar";

function Favorites({ allFavorites}) {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <h1>Favorite Books</h1>
        <div>
            <p>{allFavorites.name}</p>
        </div>
        </>
    )
}

export default Favorites;