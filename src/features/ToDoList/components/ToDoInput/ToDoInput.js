import React, { useState } from "react";

function ToDoInput({ handleTaskList }) {
  const [input, setInput] = useState("");

  const handleInputChange = (data) => {
    setInput(data);
  };
  console.log(input);

  return (
    <>
      <div>
        <input
          type={"text"}
          placeholder={"Please enter a task"}
          value={input}
          onChange={(e) => {
            handleInputChange(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleTaskList(input);
            handleInputChange("");
          }}
        >
          Add a task
        </button>
      </div>
    </>
  );
}

export default ToDoInput;
