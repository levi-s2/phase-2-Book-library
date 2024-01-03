import React from "react";
import { useOutletContext } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import BooksCard from "./BooksCard";

function Books() {
    const {books, handleFavoriteBook} = useOutletContext()

    //pass the books from de data base to the BooksCard component, responsible to render them
    const mappedBooks = books.map(book => {
        return (
            <BooksCard key={book.id} book={book} handleFavoriteBook={handleFavoriteBook}/>
        )
    })

    return ( 
        <div>
            <h1 style={{ color: "white", textAlign: "center"}}>Book Library</h1>
            <h2 style={{ color: "white" }}>All Books:</h2>
            {mappedBooks}
        </div>
    )
};

export default Books