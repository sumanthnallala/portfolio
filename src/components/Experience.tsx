import React from "react";
import "./Experience.scss";
import PlatformLayout from "./PlatformLayout";
import ExperienceCard from "./ExperienceCard";
import {
  NXTWAVE,
  PHENOM_FULLTIME,
  PHENOM_INTENRSHIP,
} from "../constants/Constants";
import PhenomIcon from "./icons/PhenomIcon";
import NxtwaveIcon from "./icons/NxtwaveIcon";

const Experience = () => {
  return (
    <PlatformLayout>
      <div className="experience-container">
        <ExperienceCard
          title={PHENOM_FULLTIME.TITLE}
          company={PHENOM_FULLTIME.COMPANY}
          logo={<PhenomIcon />}
          startDate={PHENOM_FULLTIME.START_DATE}
          endDate={PHENOM_FULLTIME.END_DATE}
          description={PHENOM_FULLTIME.DESCRIPTION}
          skills={PHENOM_FULLTIME.SKILLS}
          location={PHENOM_FULLTIME.LOCATION}
        />
        <ExperienceCard
          title={PHENOM_INTENRSHIP.TITLE}
          company={PHENOM_INTENRSHIP.COMPANY}
          logo={<PhenomIcon />}
          startDate={PHENOM_INTENRSHIP.START_DATE}
          endDate={PHENOM_INTENRSHIP.END_DATE}
          description={PHENOM_INTENRSHIP.DESCRIPTION}
          skills={PHENOM_INTENRSHIP.SKILLS}
          location={PHENOM_INTENRSHIP.LOCATION}
        />
      </div>
    </PlatformLayout>
  );
};

export default Experience;
