import React from "react";
import { FcSearch } from "react-icons/fc";
import "./SearchInput.css";
function SearchInput({ searchInput, handleSearchInput }) {
  return (
    <div>
      <input
        className="searchInput"
        style={{
          width: "250px",
          height: "30px",
          marginTop: "20px",
          padding: "6px",
        }}
        type={"search"}
        placeholder={"Search a task..."}
        value={searchInput}
        onChange={(e) => {
          handleSearchInput(e.target.value, "searchInput");
        }}
      />
      <FcSearch className="searchIcon" />
    </div>
  );
}

export default SearchInput;
