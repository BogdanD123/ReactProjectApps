import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ToDoList from "./features/ToDoList/ToDoList";
import Clock from "./features/Clock/Clock";
import Calculator from "./features/Calculator/Calculator";
import "./App.css";

//ReactApps

function App() {
  const [activeTab, setActiveTab] = useState([
    {
      id: 1,
      label: (
        <button type="submit" className="toDoListContainer styleLabels">
          <div className="svgIconContainer">
            <img
              className="toDoListSvgIcon svg"
              src="https://www.svgrepo.com/show/103550/list.svg"
              alt="toDoListSvg"
            ></img>
          </div>
          Todolist
        </button>
      ),
      isActive: true,
      component: <ToDoList />,
    },
    {
      id: 2,
      label: (
        <button type="submit" className="calculatorContainer styleLabels">
          <div className="svgIconContainer">
            <img
              className="calculatorSvgIcon svg"
              src="https://www.svgrepo.com/show/137804/calculator.svg"
              alt="clockSvg"
            ></img>
          </div>
          Calculator
        </button>
      ),
      isActive: false,
      component: <Calculator />,
    },
    {
      id: 3,
      label: (
        <button type="submit" className="clockContainer styleLabels">
          <div className="svgIconContainer">
            <img
              className="clockSvgIcon svg"
              src="https://www.svgrepo.com/show/92033/clock.svg"
              alt="clockSvg"
            ></img>
          </div>
          Clock
        </button>
      ),
      isActive: false,
      component: <Clock />,
    },
  ]);
  const handleActiveTab = (id) => {
    let copy = [...activeTab];
    copy[activeTab.findIndex((item) => item.isActive)].isActive = false;
    copy[activeTab.findIndex((item) => item.id === id)].isActive = true;
    setActiveTab(copy);
  };

  const user = {
    name: "Bogdan",
    lastname: "Dimitrievksi",
  };

  return (
    <div key={activeTab}>
      <Navigation activeTab={activeTab} handleActiveTab={handleActiveTab} />

      <div className="contentContainer">
        <div className="navBarContainer">
          {activeTab.find((item) => item.isActive).component}
        </div>
      </div>
      <Footer
        userData={user}
        name={"Bogdan"}
        surname={"Dimitrievski"}
        className="footerBar"
        id="footerId"
      />
    </div>
  );
}

export default App;
