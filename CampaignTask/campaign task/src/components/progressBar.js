import React, { useState } from "react";
import { Progress } from "antd";
import { ProgressText, Progress_Bar } from "../stylings/RecipientStyle";

const ProgressBar = ({ percent }) => {
  let strokeColor = "blue";

  if (percent < 40) {
    strokeColor = "red";
  }
  if (percent > 80) {
    strokeColor = "green";
  }

  return (
    <div className="progress-container">
      <ProgressText className="progress-text">{percent}%</ProgressText>
      <Progress_Bar
        percent={percent}
        showInfo={false}
        strokeColor={strokeColor}
      />
    </div>
  );
};

export default ProgressBar;
