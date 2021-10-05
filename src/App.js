import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { ItemList } from "./Components/ItemList/ItemList";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <NavBar numeroDeItems="" />
      <ItemListContainer greeting="Greetings!!" />
      <ItemList />
    </div>
  );
}

export default App;
