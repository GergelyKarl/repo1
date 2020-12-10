import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Body from "./Body";
//1:35
function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__main">
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
