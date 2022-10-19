import React from "react";

function Search({searchTerm, setSearchTerm}) {
  
  
  const handleOnChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Search;
