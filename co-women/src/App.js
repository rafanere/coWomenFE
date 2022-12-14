import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyAccount from "./views/my-account";
import HomePage from "./views/home-page";
import SearchPage from "./views/search-page";
import Header from "./components/header/header";
import LoginPage from "./views/login-page";
import AdsDetailsPage from "./views/ads-details-page";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ads-details" element={<AdsDetailsPage />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={5000} />
        </Router>
    </div>
  );
}

export default App;
