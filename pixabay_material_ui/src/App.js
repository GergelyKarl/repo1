import React from "react";
import NavBar from "./components/navbar/NavBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./App.css";

import Search from "./components/search/Search";

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
