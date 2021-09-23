import CardWidget from "./Components/CardWidget/CardWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <CardWidget icono='asdasdsadsad' />
    <ItemListContainer saludo='Greetingssss!' />
    </div>
  );
}

export default App;
