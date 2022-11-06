import React, { useState, useEffect } from "react";
import SearchInput from "./components/Search/SearchInput";
import ToDoHeader from "./components/ToDoInput/ToDoInput";
import EditButton from "./components/EditButton/EditButton";
import "./ToDoList.css";
function ToDoList() {
  const [taskList, setTaskList] = useState(["React", "JavaScript", "JSX"]);
  const [inputs, setInputs] = useState({
    addInput: "",
    searchInput: "",
    editInput: "",
  });

  const handleSearchInput = (data, key) => {
    let copy = { ...inputs };
    copy[key] = data;
    setInputs(copy);
  };
  const handleTaskList = (data) => {
    let copy = [...taskList];
    copy.push(data);
    setTaskList(copy);
  };

  const handleCompletedButton = (data) => {
    let copy = [...taskList];
    copy.splice(
      taskList.findIndex((item) => item === data),
      1
    );
    setTaskList(copy);
  };

  const handleInputTask = (data, index) => {
    let copy = [...taskList];
    copy[index] = data;
    setTaskList(copy);
  };

  const prepareData = () => {
    if (inputs.searchInput) {
      return taskList.filter((item) =>
        item.toLowerCase().includes(inputs.searchInput.toLowerCase())
      );
    }
    return taskList;
  };

  useEffect(() => {
    if (inputs.searchInput) {
      prepareData();
    }
  }, [inputs.searchInput]);

  return (
    <div className="componentContainer">
      <ToDoHeader handleTaskList={handleTaskList} />
      <SearchInput
        handleSearchInput={handleSearchInput}
        searchInput={inputs.searchInput}
      />
      <EditButton
        editData={prepareData}
        handleCompletedButton={handleCompletedButton}
        handleInputTask={handleInputTask}
      />
    </div>
  );
}
export default ToDoList;
