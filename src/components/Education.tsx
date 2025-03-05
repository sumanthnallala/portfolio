import React from "react";
import { NXTWAVE, SCALER, NMREC } from "../constants/Constants";
import ExperienceCard from "./ExperienceCard";
import NxtwaveIcon from "./icons/NxtwaveIcon";
import PlatformLayout from "./PlatformLayout";
import ScalerIcon from "../assets/icons/scaler.png";
import NrmecIcon from "../assets/icons/nmrec.png";
import "./Experience.scss";

const Education = () => {
  return (
    <PlatformLayout>
      <div className="experience-container">
        <ExperienceCard
          title={SCALER.TITLE}
          company={SCALER.COMPANY}
          logo={<img src={ScalerIcon} alt="" height={50} width={50} />}
          startDate={SCALER.START_DATE}
          endDate={SCALER.END_DATE}
          description={SCALER.DESCRIPTION}
          skills={SCALER.SKILLS}
          location={SCALER.LOCATION}
        />
        <ExperienceCard
          title={NXTWAVE.TITLE}
          company={NXTWAVE.COMPANY}
          logo={<NxtwaveIcon />}
          startDate={NXTWAVE.START_DATE}
          endDate={NXTWAVE.END_DATE}
          description={NXTWAVE.DESCRIPTION}
          skills={NXTWAVE.SKILLS}
          location={NXTWAVE.LOCATION}
        />
        <ExperienceCard
          title={NMREC.TITLE}
          company={NMREC.COMPANY}
          logo={<img src={NrmecIcon} alt="" height={50} width={50} />}
          startDate={NMREC.START_DATE}
          endDate={NMREC.END_DATE}
          location={NMREC.LOCATION}
        />
      </div>
    </PlatformLayout>
  );
};

export default Education;
