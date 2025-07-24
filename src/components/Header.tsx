import React from "react";
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

  const navElements = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="logo">
        <h3>Sumanth Nallala</h3>
      </div>
      <nav className="nav-links">
        {navElements.map((element) => (
          <a
            key={element.name}
            href={element.href}
            style={{
              color: darkMode ? "#ffffff" : "#000000",
              textDecoration: "none",
            }}
          >
            {element.name}
          </a>
        ))}
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
