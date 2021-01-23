import React, { useEffect, useState } from "react";
import { setInterval } from "timers";
import "./ExploreContainer.css";
import Clock from "./Clock.js";

const ExploreContainer = ({ name }) => {
  const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());
  // const [dateString, setDateString] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setInterval(() => {
      setTimeString(new Date().toLocaleTimeString());
    }, 1000);

    // setInterval(() => {
    //   setDateString(new Date().toLocaleDateString());
    // }, 60000);
  }, []);

  return (
    <div className="container">
      <strong>
        <Clock />
        <h1>{timeString}</h1>
      </strong>
      {/* <div className="date">{dateString}</div> */}
    </div>
  );
};

export default ExploreContainer;
