import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <p>
          Hi, I am Sumanth, a Software Engineer who is passionate about building
          smart, scalable and genuinely useful applications. I develop clean and
          maintainable systems using Java, Spring Boot helping businesses
          streamline operations and make better decisions.
        </p>
        <p>
          I believe the best technology should create real results. whether it
          is improving customer experience or increasing customer engagement. I
          focus on delivering measurable outcomes to both users and businesses.
        </p>
        <ul>
          Key skills include:
          <li> Frontend Development : React, Javascript </li>
          <li> Backend Development : Java, Spring Boot </li>
          <li>Databases : MySQL, MongoDB</li>
          <li>Testing Frameworks : JUnit, Mockito</li>
          <li>Cloud Technologies : AWS</li>
          <li>AI Assisted Tools : Github Copilot, Gemini</li>
        </ul>
        <p>
          I am an enthusiastic leader who takes initiative, encourages
          innovation, and promotes collaborative teamwork with a passion for
          continuous learning and growth. If you are building something that
          needs to work better, move faster or serve more users effectively. I
          would love to connect.
        </p>
      </div>
      <div className="image">
        <img src=""></img>
      </div>
    </div>
  );
};

export default About;
