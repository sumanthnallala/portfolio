import React, { Suspense } from "react";
import "./Home.scss";
import ProfilePicture from "./images/ProfilePicture";
import PlatformLayout from "./PlatformLayout";
import { Description, INTRO_WITH_NAME, TITLE } from "../constants/Constants";
import Contact from "./Contact";
const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlatformLayout>
        <div className="home-content">
          <div className="home-content-container">
            <div className="left-home-content">
              <h1>{INTRO_WITH_NAME}</h1>
              <h1>{TITLE}</h1>
              <h2 className="">
                <ul>
                  <li className="list-type-none">
                    {Description.FIRST_DESCRIPTION}
                  </li>
                  <li className="list-type-none">
                    {Description.SECOND_DESCRIPTION}
                  </li>
                  <li className="list-type-none">
                    {Description.THIRD_DESCRIPTION}
                  </li>
                  <li className="list-type-none">
                    {Description.FOURTH_DESCRIPTION}
                  </li>
                </ul>
              </h2>
            </div>
            <div className="right-home-content">
              <div className="profile-picture-container">
                <ProfilePicture />
              </div>
            </div>
          </div>
          <div className="contact-container">
            <Contact />
          </div>
        </div>
      </PlatformLayout>
    </Suspense>
  );
};

export default Home;
