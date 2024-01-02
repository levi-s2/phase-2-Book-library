import React from "react";
import { useOutletContext } from "react-router-dom";
import FavoriteCard from "./FavoriteCard"


function Favorites() {
const {allFavorites} = useOutletContext()
console.log(allFavorites)
const favs = allFavorites.map(f => {
    return (
    <FavoriteCard f={f}/>)
})
console.log(favs)

    return (
        <div>
        <h1 style={{ color: "white"}}>Favorite Books</h1>
        <div style={{color: "white"}}>
        {favs}
        </div>
        </div>
    )
}

export default Favorites;