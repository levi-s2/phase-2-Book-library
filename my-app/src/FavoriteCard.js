import React from "react";

function FavoriteCard({ f }) {
    return (
        <div>
            <ul>
               <h2>{f.name}</h2>
               <p>{f.author}</p>
            </ul>
        </div>
    )
}

export default FavoriteCard