import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar numeroDeItems="" />
      <ItemListContainer greeting="Greetings!!" />
    </div>
  );
}

export default App;
