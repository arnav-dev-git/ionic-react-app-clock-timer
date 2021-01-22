import React from "react";

const Spinner = () => {
  return (
    <>
      <div
        className="container-time"
        onClick={runTimmer}
        onDoubleClick={resetTimer}
      >
        <CountdownCircleTimer
          isPlaying={start}
          duration={currentValue}
          colors={[
            ["#dd32d0", 0.2],
            ["#17e93a", 0.7],
            ["#e4f30d", 0.83],
          ]}
          // isLinearGradient={true}
          strokeWidth={25}
          size={250}
          rotation={"clockwise"}
          trailColor={"transparent"}
          fontSize={30}
          onComplete={() => {
            setStart((e) => !e);
            SetCurrentValue();
            return [start, 0];
          }}
        >
          {/* {<div>{({ remainingTime }) => remainingTime}</div>} */}
          {/* {renderingTime} */}
        </CountdownCircleTimer>
      </div>
    </>
  );
};

export default Spinner;
