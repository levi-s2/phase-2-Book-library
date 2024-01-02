import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar() {
    
    return (
        <div className="bg-primary">
        <Navbar bg="bg-primary" data-bs-theme="bg-primary">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Books">Books</Nav.Link>
            <Nav.Link href="/Request">Request</Nav.Link>
            <Nav.Link href="/Favorites">Favorites</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
}

export default NavBar;



