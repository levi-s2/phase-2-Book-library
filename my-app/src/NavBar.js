import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar() {
    
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Favorites">Favorites</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}

export default NavBar;



