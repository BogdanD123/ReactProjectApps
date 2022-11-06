import React, { useState } from "react";
import "./Calculator.css";
function Calculator() {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");

  const calcButtons = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].forEach((item, index) => {
    calcButtons.push(
      <button
        onClick={(e) => setData(data + e.target.value)}
        key={index}
        value={item}
      >
        {item}
      </button>
    );
  });

  const deleteValue = () => {
    setData(data.slice(0, -1));
  };

  return (
    <div className="divContainer">
      <div className="inputContainer">{data} </div>
      <div className="buttonContainer">
        {calcButtons}
        <div>
          <button onClick={(e) => setData(data + e.target.value)} value="+">
            +
          </button>
          <button onClick={(e) => setData(data + e.target.value)} value="-">
            -
          </button>
          <button onClick={(e) => setData(data + e.target.value)} value="*">
            *
          </button>
          <button onClick={(e) => setData(data + e.target.value)} value="/">
            /
          </button>
          <button
            onClick={(e) => {
              try {
                setData(eval(`${data + e.target.value}`));
              } catch (err) {
                console.log(err);
              }
            }}
          >
            =
          </button>
        </div>

        <button onClick={() => deleteValue({ data })}>DELETE</button>
        <button onClick={() => setData("")}>AC</button>
      </div>
    </div>
  );
}

export default Calculator;
