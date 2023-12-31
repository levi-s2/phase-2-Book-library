import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import BooksCard from "./BooksCard";

function Books({ books, handleFavoriteBook }) {
    
    const mappedBooks = books.map(book => {
        return (
            <BooksCard key={book.id} book={book} handleFavoriteBook={handleFavoriteBook}/>
        )
    })

    return ( 
        <div>
            <h1 style={{ color: "white"}}> All Books</h1>
            {mappedBooks}
        </div>
    )
};

export default Books