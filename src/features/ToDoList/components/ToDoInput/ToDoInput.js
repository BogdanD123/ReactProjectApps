import React, { useState } from "react";
import "./ToDoInput.css";
function ToDoInput({ handleTaskList }) {
  const [input, setInput] = useState("");
  const [popUp, setPopUp] = useState("");

  const handleInputChange = (data) => {
    return setInput(data);
  };

  const handlePopUp = (data) => {
    if (data === "") {
      setPopUp(
        <div className="popUpContainer">
          <div className="popUp">No task added</div>
        </div>
      );
    }
    setTimeout(() => {
      setPopUp("");
    }, 2000);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="addTaskInput"
          type={"text"}
          placeholder={"Please enter a task..."}
          value={input}
          onChange={(e) => {
            handleInputChange(e.target.value);
          }}
        />
        <button
          className="taskButton"
          onClick={() => {
            if (input.trim() === "") {
              handlePopUp(input);
            } else {
              handleTaskList(input);
              handleInputChange("");
            }
          }}
        >
          Add a task
        </button>
        <br />
        {popUp}
      </form>
    </>
  );
}

export default ToDoInput;
