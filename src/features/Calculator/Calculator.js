import React, { useState } from "react";
import { calcButtons } from "./helper";
import "./Calculator.css";

//ReactApp #Calculator

function Calculator() {
  const [data, setData] = useState("");

  const deleteValue = () => {
    if (data) {
      setData(data.slice(0, -1));
    }
  };

  return (
    <div className="calcContainer">
      <div className="inputActionsContainer">{data} </div>
      <div>
        {calcButtons.map((item) => {
          console.log(item);
          return (
            <button
              className="calculatorButtonsContainer"
              key={item}
              onClick={() => setData(data + item)}
            >
              {item}
            </button>
          );
        })}

        <button
          className="result"
          onClick={() => {
            if (data) {
              // eslint-disable-next-line
              return setData(eval(data));
            }
            return null;
          }}
        >
          =
        </button>

        <button className="deleteButton" onClick={() => deleteValue({ data })}>
          DELETE
        </button>
        <button className="acButton" onClick={() => setData("")}>
          AC
        </button>
      </div>
    </div>
  );
}

export default Calculator;
