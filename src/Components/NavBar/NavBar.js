import React from "react";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import { Navbar, Nav, Container, InputGroup, FormControl } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">    <CardWidget />  
</Navbar.Brand>
    <Nav className="me-auto">
    <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm"><ItemCount stock="30"  /></InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
    </Nav>
    </Container>
    </Navbar>
  </div>
  );
};

export default NavBar;
