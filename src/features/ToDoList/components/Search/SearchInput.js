import React from "react";

function SearchInput({ searchInput, handleSearchInput }) {
  return (
    <div>
      <input
        type={"search"}
        placeholder={"Please search a task"}
        value={searchInput}
        onChange={(e) => {
          handleSearchInput(e.target.value, "searchInput");
        }}
      />
    </div>
  );
}

export default SearchInput;
