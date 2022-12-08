import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/index.css";

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My webshop.com</Navbar.Brand>
          );
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
