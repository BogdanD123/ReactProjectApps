import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ToDoList from "./features/ToDoList/ToDoList";
import Clock from "./features/Clock/Clock";
import Calculator from "./features/Calculator/Calculator";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState([
    {
      id: 1,
      label: (
        <button type="submit" className="styleLabels">
          Todolist
        </button>
      ),
      isActive: true,
      component: <ToDoList />,
    }, // iminja na app shto kje gi pravite
    {
      id: 2,
      label: (
        <button type="submit" className="styleLabels">
          Calculator
        </button>
      ),
      isActive: false,
      component: <Calculator />,
    },
    {
      id: 3,
      label: (
        <button type="submit" className="styleLabels">
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
  return (
    <>
      <div className="">
        <Navigation activeTab={activeTab} handleActiveTab={handleActiveTab} />
        <div>{activeTab.find((item) => item.isActive).component}</div>
      </div>
      <Footer />
    </>
  );
}

export default App;
