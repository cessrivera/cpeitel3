import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [display, setDisplay] = useState("10 Things That Require Zero Talent");

  const handleButtonClick = (value) => {
    const messages = {
      "1": "Being On Time",
      "2": "Making An Effort",
      "3": "Being High Energy",
      "4": "Having A Positive Attitude",
      "5": "Being Passionate",
      "6": "Using Good Body Language",
      "7": "Being Coachable",
      "8": "Doing A Little Extra",
      "9": "Being Prepared",
      "0": "Having A Strong Work Ethic",
      RESET: "10 Things That Require Zero Talent",
      NAME: "PRINCESS DIANE RIVERA",
      "What I learned?": "I learned to improve my coding skills.",
      "What I want to learn?": "I want to learn React deeply.",
      "How will I learn?": "By practicing daily and building projects.",
    };
    setDisplay(messages[value] || display);
  };

  return (
    <div className="container">
      <h1>PRINCESS DIANE RIVERA - IT3A</h1>
      <div className="display-box">{display}</div>

      <button className="special-button" onClick={() => handleButtonClick("What I learned?")}>
        What I learned?
      </button>
      <button className="special-button" onClick={() => handleButtonClick("What I want to learn?")}>
        What I want to learn?
      </button>
      <button className="special-button" onClick={() => handleButtonClick("How will I learn?")}>
        How will I learn?
      </button>

      <div className="grid">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, "RESET", 0, "NAME"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
