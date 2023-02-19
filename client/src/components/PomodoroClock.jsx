import React, { useState, useEffect } from "react";

const formatTime = (timeLeft) => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
};

const PomodoroClock = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerType, setTimerType] = useState("Work");

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 0) {
          if (timerType === "Work") {
            setTimerType("Break");
            return 5 * 60;
          } else {
            setTimerType("Work");
            return 25 * 60;
          }
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [timerType]);

  const getEnergyBarStyle = () => {
    const energy = timeLeft / (timerType === "Work" ? 25 * 60 : 5 * 60);
    const energyPercentage = Math.round(energy * 100);
    const color = timerType === "Work" ? "purple" : "red";
    return {
      width: `${energyPercentage}%`,
      height: "20px",
      backgroundColor: color,
      transition: "width 1s ease-in-out",
      borderRadius: "40px"
    };
  };

  return (
    <div>
        <div style={getEnergyBarStyle()}></div>
      <h1 className = "clock-text">{timerType} time: {formatTime(timeLeft)}</h1>
    </div>
  );
};

export default PomodoroClock;

