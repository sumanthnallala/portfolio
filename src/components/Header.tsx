import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
interface props {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}
const Header = (Props: props) => {
  const { darkMode, setDarkMode } = Props;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="logo">
        <Link to="/">Sumanth Nallala</Link>
      </div>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button
        className="toggle-mode"
        style={darkMode ? { background: "#000000" } : { background: "#ffffff" }}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <MoonOutlined style={{ color: "#ffffff" }} />
        ) : (
          <SunOutlined style={{ color: "#000000" }} />
        )}
      </button>
    </header>
  );
};

export default Header;
