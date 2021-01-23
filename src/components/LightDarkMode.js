import React from "react";
import "./LightDarkMode.css";
import "../theme/variables.css";

import { IonIcon } from "@ionic/react";
import { sunny, moon } from "ionicons/icons";

const LightDarkMode = () => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <p className="p-mode">Mode</p>
      <div className="settings-mode">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={toggleDarkModeHandler}
        />
        <label htmlFor="checkbox" className="label">
          <IonIcon icon={moon} className="moon"></IonIcon>
          <IonIcon icon={sunny} className="sun"></IonIcon>
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
};

export default LightDarkMode;
