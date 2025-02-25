import React, { Suspense } from "react";
import "./Home.scss";
import ProfilePicture from "./images/ProfilePicture";
const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="home-container">
        <div className="left-home-content">
          <h1>Hey, I am Sumanth Reddy Nallala </h1>
          <h2>I am Full Stack Developer</h2>
          <p className="">
            I'm a Software Developer with 2+ Years of Progressive Experience
            having an expertise in Full Stack Web Development of SaaS Product
            following Agile Methodologies. Driven Product Development Engineer
            with a proven track record at Phenom, enhancing product
            functionality and user experience in APM, QA Hub, and App Trail.
            Excelled in React.js, Java, and team mentorship, boosting test
            coverage by 80%. Skilled in both technical innovation and effective
            team collaboration.
          </p>
        </div>
        <div className="right-home-content">
          <div className="profile-picture-container">
            <ProfilePicture />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
