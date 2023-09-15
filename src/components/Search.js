import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="search link icon"></i>
    </div>
  );
}

export default Search;