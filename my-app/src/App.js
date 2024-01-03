import React, {useState, useEffect} from "react"; 
import { Outlet }from "react-router-dom";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    //state variable that holds all book data
    const [books, setBooks] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/popularBooks')
      .then(r => r.json())
      .then(books => setBooks(books))
    }, [])

    function handleAddItem(newItem) {
        setBooks([...books, newItem]);
      }
      
      //function to handle the favorite button logic and add the clicked book to the favorites
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
        <div className="bg-dark">
            <header>
            <NavBar />
            </header>
            <Outlet context={{books: books, 
                handleFavoriteBook: handleFavoriteBook,
                handleAddItem: handleAddItem,
                allFavorites: allFavorites}}/>
        </div>
    )
}

export default App