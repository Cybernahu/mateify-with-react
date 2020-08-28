import React from "react";
import LoginMenu from "./components/loginMenu";
import PlayList from './components/PlayList';
import NavBar from './components/navBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

      <div className="App">

      <Router>
      <NavBar />
        
        

      <Switch>
          <Route path="/" exact>
            <LoginMenu />
          </Route>
          <Route path="/PlayList">
            <PlayList /> 
          </Route>
      </Switch>
      
      </Router>
        
      </div>

  );
}

export default App;
