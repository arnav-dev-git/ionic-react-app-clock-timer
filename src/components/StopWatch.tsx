import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ContainerProps {
  name: string;
}


const StopWatch: React.FC = () => {
  const percentage: number = 50;

  return (
    <div className="container">
      <div className="cbar">
        <CircularProgressbar
          value={percentage}
          text={`1:05`}
          minValue={0}
          styles={buildStyles({
            pathColor: `rgb(47, 12, 170)`,
            textColor: '#5a4747',
            trailColor: '#ffffff',
            backgroundColor: '#048dd6',
          })}
        />
      </div>
    </div>
  );
};

export default StopWatch;
