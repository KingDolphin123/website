import HomePage from "./Components/HomePage";
import React from 'react';
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Para from "./Components/AboutBody";
import Test from "./Components/test";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/About">
          <div>
            <Test />
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
            <HomePage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
