import "./App.css";
import * as React from "react";
import Header from "./components/header/header";
import HomePage from "./components/home-page/home-page";
import SearchPage from "./components/search-page/search-page";


function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

export default App;
