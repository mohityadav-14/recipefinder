import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery,getRecipes }) => {
  return (
    <>
      <input
        type="text"
        value={searchQuery}
        placeholder="Enter Fruits or vegtable "
        onChange={(e) => {
          setSearchQuery(e.target.value);
       
        }}
      />
        <button  onClick={()=>{getRecipes(searchQuery)}}>Search</button>
    </>
  );
};

export default SearchBar;
