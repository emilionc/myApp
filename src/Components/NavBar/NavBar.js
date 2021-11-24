import React from "react";
import "./NavBar.css";
import { Navbar, Container } from "react-bootstrap";
//componentes importados
import CardWidget from "../CardWidget/CardWidget";
import Navegation from "../Navegation/Navegation";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="container-navbar">
          <Navbar.Brand className="cont-links" href="#home">
            {" "}
            <CardWidget />          
            
          </Navbar.Brand>
          <Navegation />
          
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
