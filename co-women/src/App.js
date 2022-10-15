import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyAccount from "./views/my-account";
import HomePage from "./views/home-page";
import SearchPage from "./views/search-page";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
