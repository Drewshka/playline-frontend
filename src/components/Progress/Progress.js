import React from "react";
import "./Progress.scss";
import progress from "../../assets/icons/progress@2x.png";

export const Progress = () => {
  return (
    <figure className="progressIcon">
      <img src={progress} alt="progress icon" />
    </figure>
  );
};
