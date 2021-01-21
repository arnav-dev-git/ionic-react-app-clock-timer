import React, { useEffect, useState, useRef } from "react";
import { IonItem, IonLabel, IonCardContent, IonDatetime } from "@ionic/react";
import "./StopWatchStyle.css";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const StopWatch = () => {
  const [time, setTime] = useState("00:10");
  const [currentValue, setCurrentValue] = useState(
    Number(time.split(":")[0]) * 60 + Number(time.split(":")[1])
  );

  useEffect(() => {
    setCurrentValue(
      Number(time.split(":")[0]) * 60 + Number(time.split(":")[1])
    );
    console.log("use effect worked ! ", time, currentValue);
  }, []);

  const [start, setStart] = useState(false);

  function runTimmer() {
    setStart((e) => !e);
  }

  function setTimmer() {
    setStart((e) => !e);
  }

  function changeTime(e) {
    setCurrentValue(
      Number(time.split(":")[0]) * 60 + Number(time.split(":")[1])
    );
  }

  //* time spinner function

  function TimeSpinner() {
    return (
      <>
        <div className="container-time" onClick={runTimmer}>
          <CountdownCircleTimer
            isPlaying={start}
            duration={
              Number(time.split(":")[0]) * 60 + Number(time.split(":")[1])
            }
            colors={[
              ["#dd32d0", 0.2],
              ["#17e93a", 0.7],
              ["#e4f30d", 0.83],
            ]}
            // isLinearGradient={true}
            strokeWidth={25}
            size={250}
            trailColor={"transparent"}
            fontSize={30}
            onComplete={() => {
              setStart((e) => !e);
              return [start, 0];
            }}
          >
            {/* {<div>{({ remainingTime }) => remainingTime}</div>} */}
            {/* {renderingTime} */}
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
                    handler: () => {
                      // console.log("Clicked Log. Do not Dismiss.");
                    },
                  },
                  {
                    text: "Done",
                    handler: (e) => {
                      // console.log("Clicked Log. Do not Dismiss.");
                      const makeTime = `${e.minute.text}:${e.second.text}`;
                      setTime(makeTime);
                      changeTime();
                    },
                  },
                ],
              }}
              display-format="mm:ss"
              placeholder="Tap Here"
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
