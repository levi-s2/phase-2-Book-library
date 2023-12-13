import React, {useState, useEffect} from "react";
import BooksCard from "./BooksCard";
import NavBar from "./NavBar";

function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/popularBooks')
      .then(r => r.json())
      .then(books => setBooks(books))
    }, [])

    const mappedBooks = books.map(book => {
        return (
            <BooksCard key={book.id} name={book.name} author={book.author}
            image={book.imgURL}/>
        )
    })

    return ( 
        <div>
            <header>
        <NavBar />
      </header>
            {mappedBooks}
        </div>
    )
};

export default Books