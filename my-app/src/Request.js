import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'


function Request() {
  const {handleAddItem} = useOutletContext()

  //all state variables used to make the controlled form input
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  //creates a new obj using state variables as the value to the corresponding keys
  function handleSubmit(e) {
      e.preventDefault();
      const itemData = {
          name: title,
          author: author,
          imgUrl: image
      }

    //post request that updates the database and posts the new obj sent from the form submit
      fetch("http://localhost:3000/popularBooks", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
      })
      .then(r => r.json())
      .then(newItem => handleAddItem(newItem))
    }

    return (
      <div>
        <h1 style={{ color: "white"}}>Request a Book</h1>
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
          <Button type="submit">submit</Button>
              </form>
          </div>
    );
    }

  export default Request;
