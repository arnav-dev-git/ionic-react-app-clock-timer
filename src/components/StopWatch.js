import React, { useEffect, useState } from "react";
import { IonCardContent, IonDatetime } from "@ionic/react";
import useSound from "use-sound";
import "./StopWatchStyle.css";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import deskBell from "../music/deskBell.mp3";

const StopWatch = () => {
  //!sound
  const [play] = useSound(deskBell);

  const [time, setTime] = useState("00:10");
  const [currentValue, setCurrentValue] = useState(
    Number(time.split(":")[0]) * 60 + Number(time.split(":")[1])
  );

  const SetCurrentValue = () => {
    setCurrentValue(
      Number(time.split(":")[0]) * 60 + Number(time.split(":")[1])
    );
  };

  useEffect(() => {
    changeTime();
    SetCurrentValue();
    // console.log("use effect worked ! ", time, currentValue);
  }, [time, currentValue]);

  const [start, setStart] = useState(false);

  //^ display time text
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <h2 style={{ fontSize: "40px" }}>
        {minutes}:{seconds}
      </h2>
    );
  };

  function runTimmer() {
    setStart((e) => !e);
  }

  function getCurrentValue() {
    return currentValue;
  }

  function changeTime() {
    SetCurrentValue();
  }

  //* time spinner function

  function TimeSpinner() {
    return (
      <>
        <div className="container-time" onClick={runTimmer}>
          <CountdownCircleTimer
            isPlaying={start}
            duration={getCurrentValue()}
            colors={[
              ["#dd32d0", 0.2],
              ["#17e93a", 0.4],
              ["#e4f30d", 0.5],
              ["#85FFBD", 0.7],
              ["#00ffd3", 0.76],
            ]}
            // colors={[
            //   ["#85FFBD", 0.3],
            //   ["#FFFB7D", 0.5],
            //   ["#00ffd3", 1.0],
            // ]}
            initialRemainingTime={getCurrentValue()}
            // isLinearGradient={true}
            strokeWidth={25}
            size={250}
            rotation={"clockwise"}
            trailColor={"transparent"}
            fontSize={30}
            key={getCurrentValue()}
            onComplete={() => {
              setStart((e) => !e);
              play();
              SetCurrentValue();
              return [start, 200];
            }}
          >
            {children}
          </CountdownCircleTimer>
        </div>
      </>
    );
  }

  //* time selector modal function

  function TimeSelector() {
    return (
      <>
        <div className="timeSelector-wrap">
          <IonCardContent style={{ marginBottom: "30px !important" }}>
            <IonDatetime
              pickerOptions={{
                buttons: [
                  {
                    text: "Cancle",
                    handler: () => {},
                  },
                  {
                    text: "Done",
                    handler: (e) => {
                      const makeTime = `${e.minute.text}:${e.second.text}`;
                      setTime(makeTime);
                      changeTime();
                      SetCurrentValue();
                    },
                  },
                ],
              }}
              display-format="mm:ss"
              placeholder="Set Time"
              mode="ios"
            ></IonDatetime>
          </IonCardContent>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="ion-text-header">
        <h3>Time:</h3>
        <h3>{time}</h3>
      </div>
      {TimeSpinner()}
      {TimeSelector()}
    </>
  );
};

export default StopWatch;
