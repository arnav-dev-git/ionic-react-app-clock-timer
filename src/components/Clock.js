import React from "react";
import "./Clock.css";

const Clock = () => {
  return (
    <div className="clock_wrapper">
      <div className="clock">
        <div className="hour">
          <div className="hr" id="hr"></div>
        </div>
        <div className="min">
          <div className="mn" id="mn"></div>
        </div>
        <div className="sec">
          <div className="sc" id="sc"></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
