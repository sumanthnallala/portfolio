import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button } from "antd";
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
        <h3>Sumanth Nallala</h3>
      </div>
      <nav className="nav-links">
        <Button type="text" style={{ color: darkMode ? "#ffffff" : "#000000" }}>
          About
        </Button>
        <Button type="text" style={{ color: darkMode ? "#ffffff" : "#000000" }}>
          Projects
        </Button>
        <Button type="text" style={{ color: darkMode ? "#ffffff" : "#000000" }}>
          Education
        </Button>
        <Button type="text" style={{ color: darkMode ? "#ffffff" : "#000000" }}>
          Contact
        </Button>
      </nav>
      <div className="social-links">
        <Link
          to={"https://www.linkedin.com/in/sumanthnallala/"}
          target="_blank"
          style={{ color: darkMode ? "#ffffff" : "#000000" }}
        >
          LinkedIn
        </Link>
        <Link
          to={"https://github.com/sumanthnallala"}
          target="_blank"
          style={{ color: darkMode ? "#ffffff" : "#000000" }}
        >
          Github
        </Link>
        {darkMode ? (
          <MoonOutlined onClick={toggleDarkMode} style={{ color: "#ffffff" }} />
        ) : (
          <SunOutlined onClick={toggleDarkMode} style={{ color: "#000000" }} />
        )}
      </div>
    </header>
  );
};

export default Header;
