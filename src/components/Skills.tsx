import React from "react";
import ReactIcon from "./icons/ReactIcon";
import PlatformLayout from "./PlatformLayout";
import "./Skills.scss";
import JavascriptIcon from "./icons/JavascriptIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CSSIcon from "./icons/CSSIcon";
import AntdIcon from "./icons/AntdIcon";
import BootstrapIcon from "./icons/BootstrapIcon";
import JavaIcon from "./icons/JavaIcon";
import SpringBootIcon from "./icons/SpringBootIcon";
import MongoDBIcon from "./icons/MongoDBIcon";
import MySQLIcon from "./icons/MySQLIcon";

const Skills = () => {
  return (
    <PlatformLayout>
      <div className="skills-container">
        <div>
          <h1>Frontend</h1>
          <div className="card">
            <div className="skill">
              <ReactIcon />
              React
            </div>
            <div className="skill">
              <JavascriptIcon />
              Javscript
            </div>
            <div className="skill">
              <HtmlIcon />
              HTML
            </div>
            <div className="skill">
              <CSSIcon />
              CSS
            </div>
            <div className="skill">
              <AntdIcon />
              Antd
            </div>
            <div className="skill">
              <BootstrapIcon />
              Bootstrap
            </div>
          </div>
        </div>
        <div>
          <h1>Backend</h1>
          <div className="card">
            <div className="skill">
              <JavaIcon />
              Java
            </div>
            <div className="skill">
              <SpringBootIcon />
              Spring Boot
            </div>
            <div className="skill">
              <MongoDBIcon />
              MongoDB
            </div>
            <div className="skill">
              <MySQLIcon />
              SQL
            </div>
          </div>
        </div>
        <div>
          <h1>Others</h1>
          <div className="card">
            <div className="skill">
              <ReactIcon />
              React
            </div>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
};

export default Skills;
