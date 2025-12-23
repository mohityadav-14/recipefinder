import React ,{useState}from "react";

const SearchBar = ({ getRecipes,error }) => {
   const [searchQuery,setSearchQuery]=useState("") //User input for search
  

  
  return (
    <div className="search-section">
      <div className="search-bar-container">
        <input
          type="text"
          value={searchQuery}
          placeholder="Enter Fruits or vegetable"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => getRecipes(searchQuery)}>
          Search
        </button>
      </div>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  
  );
};

export default SearchBar;
