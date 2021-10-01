import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar numeroDeItems="" />
      <ItemListContainer greeting="Greetings!!" />
    </div>
  );
}

export default App;
