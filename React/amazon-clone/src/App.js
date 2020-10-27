import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./CheckOut"
import Login from "./Login"
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
<Login />
          </Route>
          <Route path="/checkout">
            <Header />
            
            <CheckOut />
          </Route>
          <Route>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
