import HomePage from "./Components/HomePage";
import React from 'react';
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/About">
          <div>
            <HomePage />
          </div>
        </Route>
        <Route path="/Page2">
          <div>
            <p>Page2</p>
          </div>
        </Route>
        <Route path="/Page3">
          <div>
            <p>Page3</p>
          </div>
        </Route>
        <Route path="/">
          <div>
          <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
