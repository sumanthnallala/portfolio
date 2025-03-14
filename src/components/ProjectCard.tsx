import React from "react";
import { PROJECTS } from "../constants/Constants";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";
import GithubIcon from "./icons/GithubIcon";

const ProjectCard = () => {
  return (
    <div className="project-main-container">
      {PROJECTS?.map((item) => (
        <div className="project-container">
          <div className="project-header">
            <h3 className="project-name-container">{item.TITLE}</h3>
            <Link className="my-link" to={item.LINK} target="_blank">
              <GithubIcon />
            </Link>
          </div>
          <p className="project-techstack">{item.TECH_STACK}</p>
          <p className="project-description">{item.DESCRIPTION}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
