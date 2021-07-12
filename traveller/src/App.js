import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tour" component={Tour} />
          <Route exact path="/login" component={Login} >
        </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
