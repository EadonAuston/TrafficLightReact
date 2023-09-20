import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [lightColor, setLightColor] = useState("red");
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={`circle ${lightColor === "red" ? "red" : "black"}`}></div>
        <div
          className={`circle ${
            lightColor === "yellow" ? "yellow" : "black"
          }`}></div>
        <div
          className={`circle ${
            lightColor === "green" ? "green" : "black"
          }`}></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          lightColor === "red"
            ? setLightColor("green")
            : lightColor === "green"
            ? setLightColor("yellow")
            : setLightColor("red");
        }}>
        Next State
      </button>
    </div>
  );
};
