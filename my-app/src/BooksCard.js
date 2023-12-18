import React from "react";
import "./BooksCard.css"

function BooksCard({ book, handleFavoriteBook }) {
function handleClick() {
    fetch(`http://localhost:3000/popularBooks/${book.id}`, {
        method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isFavorite: !book.isFavorite,
    }),
    })
    .then(r => r.json())
    .then(updatedBook => handleFavoriteBook(updatedBook))
}
    return (
        <div className="bookCard">
            <h1>{book.name}</h1>
            <p>{book.author}</p>
            <button onClick={handleClick}>{book.isFavorite ? "Favorite ☆" : "Add to favorites"}</button>
            <img src={book.imgURL} alt="book"/>
        </div>
    )
}

export default BooksCard