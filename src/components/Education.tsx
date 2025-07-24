import React from "react";
import "./Education.scss";

export function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-description">
        <div>
          <h3>Master of Science in Software Engineering </h3>
          <p>Scaler Neovarsity</p>
        </div>
        <p>Oct 2024 - Present</p>
      </div>
      <div className="education-description">
        <div>
          <h3>Bachelor of Technology in Electrical Engineering </h3>
          <p>Nalla Malla Reddy Engineering College</p>
        </div>
        <p>Aug 2016 - Nov 2020</p>
      </div>
    </div>
  );
}
