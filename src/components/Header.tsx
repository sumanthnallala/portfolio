import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Link } from "react-router-dom";
import GithubIcon from "./icons/GithubIcon";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-container">
        <Link className="my-link" to="/">
          Portfolio
        </Link>
      </div>
      <div className="middle-container">
        <Link className="my-link" to="/about">
          About
        </Link>
        <Link className="my-link" to="/skills">
          Skills
        </Link>
        <Link className="my-link" to="/experience">
          Experience
        </Link>
        <Link className="my-link" to="/education">
          Education
        </Link>
        <Link className="my-link" to="/hobbies">
          Hobbies
        </Link>
      </div>
      <div className="right-container">
        <Link
          className="my-link"
          to="https://github.com/sumanthnallala"
          target="_blank"
        >
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
