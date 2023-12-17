import React, { useState } from "react";
import NavBar from "./NavBar";

function Request() {
const [title, setTitle] = useState("")
const [author, setAuthor] = useState("")
const [image, setImage] = useState("")
const [request, setRequest] = useState([])

function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
        name: title,
        author: author
    }
    fetch("http://localhost:3000/popularBooks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
    })
    .then(r => r.json())
    .then(newItem => setRequest(newItem))
  }

  return (
    <div>
       <header>
        <NavBar />
       </header>
      <h1>Request a Book</h1>
    <form className="NewItem" onSubmit={handleSubmit}>
            <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <input
          type="text"
          name="name"
          placeholder="Book Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <input
          type="text"
          name="name"
          placeholder="image URL(optional)"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <button type="submit">submit</button>
            </form>
            <div>
              <h2>Requested Books:</h2>
              <ul>
                <p>{request.name}</p>
                <p>{request.author}</p>
              </ul>
            </div>
        </div>
  );
  }
export default Request

