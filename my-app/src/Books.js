import React from "react";
import BooksCard from "./BooksCard";

function Books({ books, handleFavoriteBook }) {
    
    const mappedBooks = books.map(book => {
        return (
            <BooksCard key={book.id} book={book} handleFavoriteBook={handleFavoriteBook}/>
        )
    })

    return ( 
        <div>
            {mappedBooks}
        </div>
    )
};

export default Books