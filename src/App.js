import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import NavBar from "./Components/NavBar/NavBar";
import Navegation from "./Components/Navegation/Navegation";
//views
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import UserDetail from "./Views/UserDetail/UserDetail";
import Contact from "./Views/Contact/Contact";
import Carrito from "./Components/Carrito/Carrito";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar numeroDeItems="" />
        <Navegation />
        
        <Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
					<Route path='/detail/:id' component={UserDetail} />
          <Route path='/Carrito' component={Carrito} />

				</Switch>
      </div>
    </Router>
  );
}

export default App;
