// installed axios - npm i axios. What does axios do? axios make HTTP requests (calls)
  // import axios
// installed react router - npm i react-router-dom. What does router do? Router generates urls
  // import react-router-dom

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Wines from "./Wines";
import People from "./People";
import Books from "./Books";
import Home from "./Home";

export default class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/wines">Wines</Link>
            </li>
            <li>
              <Link to="/persons">People</Link>
            </li>
            <li> 
              <Link to="/books">Books</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/wines">
              <Wines />
            </Route>
            <Route path="/persons">
              <People />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}