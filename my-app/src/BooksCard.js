import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
            <Card style={{ width: '18rem', display: "inline-block"}}>
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={book.imgURL} />
                <Button onClick={handleClick} style={{ color: "black"}}>
                    {book.isFavorite ? "Favorite ☆" : "Add to favorites"}
                    </Button>
            </Card>
        </div>
    )
}

export default BooksCard