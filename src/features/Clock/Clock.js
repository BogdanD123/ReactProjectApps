import React, { useState, useEffect } from "react";
import "./Clock.css";
function Clock() {
  const [seconds, setSeconds] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [hours, setHours] = useState(null);
  const handleSeconds = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      handleSeconds();
    }, 1000);
  }, [seconds]);

  const handleMinutes = () => {
    setMinutes(minutes + 1);
  };
  useEffect(() => {
    setTimeout(() => {
      handleMinutes();
    }, 61000);
  }, [minutes]);

  const handleHours = () => {
    setHours(hours + 1);
  };
  useEffect(() => {
    setTimeout(() => {
      handleHours();
    }, 1000 * 60 * 60);
  }, [hours]);
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
        style={{ transform: `rotate(${seconds * 6}deg)` }}
      ></div>
      <div
        className="arrowForMinutes"
        style={{ transform: `rotate(${minutes * 6}deg)` }}
      ></div>
      <div
        className="arrowForHours"
        style={{ transform: `rotate(${hours * 6}deg)` }}
      ></div>
    </div>
  );
}

export default Clock;

//Ovaa e digitalen casovnik

//   const [clockTime, setClockTime] = useState();

//   useEffect(() => {
//     setInterval(() => {
//       const date = new Date();
//       setClockTime(date.toLocaleTimeString());
//     }, 1000);
//   }, []);

//   return <div>{clockTime}</div>;
// }
