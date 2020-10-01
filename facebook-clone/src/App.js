import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

//2:14:36
function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : (
        <React.Fragment>
          <Login />

          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            {/* <Widgets /> */}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
