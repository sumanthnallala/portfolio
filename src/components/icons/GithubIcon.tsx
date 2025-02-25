import React from "react";
import "../../App.scss";
import { ReactComponent as GithubSvg } from "../../assets/icons/github-mark.svg"; // Named import

const GithubIcon = () => {
  return <GithubSvg className="icon-size" />;
};

export default GithubIcon;
