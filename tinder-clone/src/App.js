import React from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./components/ChatScreen";
//2:20
function App() {
  return (
    <div className="App">
      <Router></Router>
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
