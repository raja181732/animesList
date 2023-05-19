import Home from "./component/Home";
import Navbar from "./component/Navbar";
import WishList from "./component/WishList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/wish">
            <WishList/>
          </Route>

        </Switch> 
      </Router>  
      
    </div>
  );
}

export default App;