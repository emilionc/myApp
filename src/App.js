import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
    
    <NavBar />
    <ItemListContainer saludo='Greetings!' />
    </div>
  );
}

export default App;
