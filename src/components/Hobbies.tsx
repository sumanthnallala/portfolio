import React from "react";
import PlatformLayout from "./PlatformLayout";
import { NavLink } from "react-router-dom";
import "./Hobbies.scss";
import {
  EXPLORING_NEW_PLACES,
  MEETING_NEW_PEOPLE,
  READING_BOOKS,
  CYCLING,
  RUNNING,
  LISTENING_TO_MUSIC,
  PROMOTING_ROAD_SAFETY,
} from "../constants/CommonConstants";

const Hobbies = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <PlatformLayout>
      <div className="hobbies-container">
        <NavLink to="" onClick={() => scrollToSection("section1")}>
          {EXPLORING_NEW_PLACES}
        </NavLink>
        <NavLink to="" onClick={() => scrollToSection("section2")}>
          {READING_BOOKS}
        </NavLink>
        <NavLink to="" onClick={() => scrollToSection("section3")}>
          {MEETING_NEW_PEOPLE}
        </NavLink>
        <NavLink to="" onClick={() => scrollToSection("section4")}>
          {CYCLING}
        </NavLink>
        <NavLink to="" onClick={() => scrollToSection("section5")}>
          {RUNNING}
        </NavLink>
        <NavLink to="" onClick={() => scrollToSection("section6")}>
          {LISTENING_TO_MUSIC}
        </NavLink>
        <NavLink to="" onClick={() => scrollToSection("section7")}>
          {PROMOTING_ROAD_SAFETY}
        </NavLink>
        <div id="section1" style={{ height: "100%", paddingTop: 100 }}>
          <h2>{EXPLORING_NEW_PLACES}</h2>
        </div>
        <div id="section2" style={{ height: "100%", paddingTop: 100 }}>
          <h2>{READING_BOOKS}</h2>
        </div>
        <div id="section3" style={{ height: "100%", paddingTop: 100 }}>
          <h2>{MEETING_NEW_PEOPLE}</h2>
        </div>
        <div id="section4" style={{ height: "100%", paddingTop: 100 }}>
          <h2>{CYCLING}</h2>
        </div>
        <div id="section5" style={{ height: "100%", paddingTop: 100 }}>
          <h2>{RUNNING}</h2>
        </div>
        <div id="section6" style={{ height: "100%", paddingTop: 100 }}>
          <h2>{LISTENING_TO_MUSIC}</h2>
        </div>
        <div
          id="section7"
          style={{ height: "100%", paddingTop: 100, paddingBottom: 200 }}
        >
          <h2>{PROMOTING_ROAD_SAFETY}</h2>
        </div>
      </div>
      <div className="top-button">
        <button onClick={() => scrollTo(0, 0)}>top</button>
      </div>
    </PlatformLayout>
  );
};

export default Hobbies;
