import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./BooksCard.css"

function FavoriteCard({ f }) {
    return (
        <div className="bookCard">
            <Card style={{ width: '18rem', display: "inline-block"}}>
                <Card.Body>
                    <Card.Title>{f.name}</Card.Title>
                    <Card.Text>{f.author}</Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={f.imgURL} />
                <Button>Favorite ☆</Button>
            </Card>
        </div>
    )
}

export default FavoriteCard