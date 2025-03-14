import React from "react";
import ProfilePicturePng from "../../assets/images/sumanthreddy.png";
const ProfilePicture = ({ className }) => {
  return (
    <img
      className={className}
      src={ProfilePicturePng}
      alt="Description"
      width={350}
      height={400}
    />
  );
};

export default ProfilePicture;
