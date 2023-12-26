import React, {useState, useEffect} from "react"; 
import Books from "./Books"
import Request from "./Request"
import NavBar from "./NavBar";
import Favorites from "./Favorites"
import "./Home.css"

function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/popularBooks')
      .then(r => r.json())
      .then(books => setBooks(books))
    }, [])

    function handleAddItem(newItem) {
        setBooks([...books, newItem]);
      }

      function handleFavoriteBook(updatedBook) {
        const updatedBooks = books.map(book => {
            if (book.id === updatedBook.id) {
                return updatedBook
            } else {
                return book
            }
        })
        setBooks(updatedBooks)
      }

      const allFavorites = books.filter(b => b.isFavorite === true)
   
    return (
        <div className="home">
            <header>
            <NavBar />
            </header>
            <div className="Books">
                <h1>Books</h1>
            <Books books={books} handleFavoriteBook={handleFavoriteBook}/>
            </div>
            <Request handleAddItem={handleAddItem}/>
            <Favorites allFavorites={allFavorites}/>
        </div>
    )
}

export default Home