import React, { useEffect, useState } from 'react';
import { setInterval } from 'timers';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());
  const [dateString, setDateString] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setInterval(() => {
      setTimeString(new Date().toLocaleTimeString());
    }, 1000);

    setInterval(() => {
      setDateString(new Date().toLocaleDateString());
    }, 60000);

  }, []);


  return (
    <div className="container">
      <strong><h1>{timeString}</h1></strong>
      <div className="date">{dateString}</div>
    </div>
  );
};

export default ExploreContainer;
