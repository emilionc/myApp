import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemList/ItemList";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//views
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import UserDetail from "./Views/UserDetail/UserDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar numeroDeItems="" />
        <ItemListContainer greeting="Greetings!!" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Detail/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
