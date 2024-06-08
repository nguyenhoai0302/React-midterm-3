import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <div className={`App ${isDark ? "bg-dark" : ""}`}>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
};

export default App;