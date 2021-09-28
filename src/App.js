import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'


function App() {
  return (
    <div className="App">
    
    <NavBar  />
    <ItemListContainer greeting= 'lorem ipsum'/>
    </div>
  );
}

export default App;
