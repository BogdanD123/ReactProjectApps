import React from "react";

function Navigation({ activeTab, handleActiveTab }) {
  return (
    <div>
      {activeTab.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (!item.isActive) {
                handleActiveTab(item.id);
              }
            }}
            className={item.isActive ? "" : ""}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
