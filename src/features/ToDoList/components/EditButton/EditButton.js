import React, { useState } from "react";
import { SiCheckmarx } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import "./EditButton.css";
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
                className="submitButton btn"
                onClick={() => {
                  setEditButton("");
                  setEditInput("");
                  handleInputTask(editInput, index);
                }}
              >
                <GiConfirmed />
              </button>
            </div>
          );
        }
        return (
          <div key={index}>
            <div>{item}</div>
            <button
              className="editButton btn"
              onClick={() => {
                editTheButtons(item);
              }}
            >
              <FaEdit className="editIcon icon" />
            </button>
            <button
              className="completedButton btn"
              onClick={() => handleCompletedButton(item)}
            >
              <SiCheckmarx className="completedIcon icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default EditButton;
