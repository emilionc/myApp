import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Icon } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Icon disabled name="cart" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sweter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medias
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Pantalon
                </NavDropdown.Item>
                <NavDropdown.Divider />
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ItemListContainer greeting="Greetings!!" />
    </div>
  );
}

export default App;
