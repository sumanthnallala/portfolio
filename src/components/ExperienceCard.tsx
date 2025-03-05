import React from "react";
import "./ExperienceCard.scss";
import ReactIcon from "./icons/ReactIcon";

interface ExperienceCardProps {
  title: string;
  company: string;
  logo: React.ReactNode;
  startDate: string;
  endDate: string;
  description?: string;
  skills?: string[];
  location: string;
}
const ExperienceCard = (props: ExperienceCardProps) => {
  const {
    title = "",
    company = "",
    logo = "",
    startDate = "",
    endDate = "",
    description = "",
    skills = [],
    location = "",
  } = props;
  return (
    <div className="experience-card">
      <div className="experience-section-1">
        <div className="company-section">
          <div className="logo">{logo ? logo : ""}</div>
          <div className="title-section">
            <p>{title}</p>
            <p>{company}</p>
          </div>
        </div>
        <div className="date-section">
          <p>
            {startDate}&nbsp; - &nbsp;{endDate}
          </p>
          <p>{location}</p>
        </div>
      </div>
      <div className="experience-section-2">{description}</div>
      <div className="experience-section-3">
        {skills?.map((ele) => (
          <li>{ele}</li>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
