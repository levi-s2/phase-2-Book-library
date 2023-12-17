import React from "react"; 
import NavBar from "./NavBar";

import "./Home.css"

function Home() {
    
    return (
        <div>
            <ul>
            <NavBar />
            </ul>
            <h1>Book Library</h1>
            <p>Welcome to the Book Library!
                All of our Books can be accessed on the Book page, and is also possible
                to request A title if not already available within the collection
            </p>
            <button>Books</button> <button>Request</button>
        </div>
    )
}

export default Home