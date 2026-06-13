import { useState } from "react";
import "./toggal.css";
import { IoIosSwitch } from "react-icons/io";

export const ToggalSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const checkIsOn = isOn ? "on" : "off";
  const checkBackground = { backgroundColor: isOn ? "#4caf50" : "#f44336" };

  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle switch
        <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
      </h1>
      <div
        className="toggle-switch"
        style={checkBackground}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
