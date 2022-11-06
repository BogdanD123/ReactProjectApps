import React, { useState } from "react";

function EditButton({ editData, handleCompletedButton, handleInputTask }) {
  const [editButton, setEditButton] = useState("");
  const [editInput, setEditInput] = useState("");
  const editTheButtons = (item) => {
    setEditButton(item);
    setEditInput(item);
  };

  return (
    <div>
      {editData().map((item, index) => {
        if (editButton === item) {
          return (
            <div>
              <input
                type={"text"}
                value={editInput}
                onChange={(e) => {
                  setEditInput(e.target.value);
                }}
              ></input>
              <button
                onClick={() => {
                  setEditButton("");
                  setEditInput("");
                  handleInputTask(editInput, index);
                }}
              >
                Submit
              </button>
            </div>
          );
        }
        return (
          <div key={index}>
            <div>{item}</div>
            <button
              onClick={() => {
                editTheButtons(item);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleCompletedButton(item)}>
              Completed
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default EditButton;
