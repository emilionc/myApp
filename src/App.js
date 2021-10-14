import ItemListContainer from "./Components/ItemList/ItemList";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import NavBar from "./Components/NavBar/NavBar";
import Navegation from "./Components/Navegation/Navegation";
//views
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import UserDetail from "./Views/UserDetail/UserDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar numeroDeItems="" />
        <Navegation />
        <ItemListContainer greeting="Greetings!!" />
        <Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/detail/:id' component={UserDetail} />
				</Switch>
      </div>
    </Router>
  );
}

export default App;
