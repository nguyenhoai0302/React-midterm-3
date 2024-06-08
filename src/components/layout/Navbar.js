import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import "react-toggle/style.css";


import Toggle from "react-toggle";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul style={{ display: "flex", listStyleType: "none"}}>
          <li style={{ marginRight: "10px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        
        <Toggle
          checked={isDark}
          onChange={({ target }) => setIsDark(target.checked)}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="Dark mode toggle"
        />
      </div>
    </nav>
  );
};

export default Navbar;
