import React from "react";
import FavoriteCard from "./FavoriteCard"
import NavBar from "./NavBar";

function Favorites({ allFavorites }) {
    const allFavs = allFavorites.map(f => {
        return (
        <FavoriteCard f={f}/>)
    })

    return (
        <>
        <header>
            <NavBar />
        </header>
        <h1>Favorite Books</h1>
        <div>
            {allFavs}
        </div>
        </>
    )
}

export default Favorites;