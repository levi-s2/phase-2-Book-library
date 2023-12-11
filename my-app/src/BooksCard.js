import React from "react";
import "./BooksCard.css"

function BooksCard({ name, author, image}) {
    return (
        <div className="bookCard">
            <h1>{name}</h1>
            <p>{author}</p>
            <img src={image} alt="book"/>
        </div>
    )
}

export default BooksCard