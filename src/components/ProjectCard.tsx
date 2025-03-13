import React from "react";
import { PROJECTS } from "../constants/Constants";
import "./ProjectCard.scss";

const ProjectCard = () => {
  return (
    <div className="project-main-container">
      {PROJECTS?.map((item) => (
        <div className="project-container">
          <h3 className="project-name-container">{item.TITLE}</h3>
          <p className="project-techstack">{item.TECH_STACK}</p>
          <p className="project-description">{item.DESCRIPTION}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
