import React, { useRef } from "react";
import "./Clock.css";
import "../theme/variables.css";

const Clock = () => {
  const hr = useRef(null);
  const mn = useRef(null);
  const sc = useRef(null);

  const deg = 6;

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.current.style.transform = `rotateZ(${mm}deg)`;
    sc.current.style.transform = `rotateZ(${ss}deg)`;
  }, 1000);

  return (
    <div className="clock_wrapper">
      <div className="clock">
        <div className="hour">
          <div className="hr" id="hr" ref={hr}></div>
        </div>
        <div className="min">
          <div className="mn" id="mn" ref={mn}></div>
        </div>
        <div className="sec">
          <div className="sc" id="sc" ref={sc}></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
