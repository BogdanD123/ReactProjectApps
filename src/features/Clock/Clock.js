import React, { useState, useEffect } from "react";
import "./Clock.css";

//ReactApp #Clock

function Clock() {
  // eden state za site tri(sek,min,saati.) i eden useEffect

  const [clock, setClock] = useState({
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
  });

  const handleClock = () => {
    if (clock.seconds === 59) {
      if (clock.minutes === 59) {
        return setClock({ ...clock, seconds: 0, minutes: 0, hours: +1 });
      }
      return setClock({
        seconds: 0,
        minutes: clock.minutes + 1,
      });
    }
    return setClock({
      ...clock,
      seconds: clock.seconds + 1,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      handleClock();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock.seconds, clock.minutes, clock.hours]);

  const renderClockHours = () => {
    const topPosition = [30, 76, 136, 200, 250, 266, 250, 205, 142, 80, 33, 8];
    const leftPosition = [
      210, 260, 280, 260, 212, 145, 80, 35, 15, 30, 80, 140,
    ];
    const num = [];
    for (let i = 1; i <= 12; i++) {
      num.push(i);
    }

    return num.map((item, index) => {
      return (
        <div
          key={index}
          className="clockHours"
          style={{ top: topPosition[index], left: leftPosition[index] }}
        >
          {item}
        </div>
      );
    });
  };
  return (
    <div className="clock">
      {renderClockHours()}
      <div className="middleDot"></div>
      <div
        className="arrowForSeconds"
        style={{ transform: `rotate(${clock.seconds * 6}deg)` }}
      ></div>
      <div
        className="arrowForMinutes"
        style={{ transform: `rotate(${clock.minutes * 6}deg)` }}
      ></div>
      <div
        className="arrowForHours"
        style={{ transform: `rotate(${clock.hours * 30}deg)` }}
      ></div>
    </div>
  );
}

export default Clock;
