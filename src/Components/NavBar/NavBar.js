import React from "react";
import "./NavBar.css";
import { Navbar,  Container } from "react-bootstrap";
//componentes importados
import CardWidget from "../CardWidget/CardWidget";
const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">    <CardWidget />  
</Navbar.Brand>

    </Container>
    </Navbar>
  </div>
  );
};

export default NavBar;
