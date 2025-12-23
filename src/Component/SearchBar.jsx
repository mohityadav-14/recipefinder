import React ,{useState}from "react";

const SearchBar = ({ getRecipes,error }) => {
   const [searchQuery,setSearchQuery]=useState("") //User input for search
  

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        placeholder="Enter Fruits or vegetable "
        onChange={(e) => {
          setSearchQuery(e.target.value);
       
        }}  />

        {error && <p style={{color:"red"}}>{error }</p>}
        <button  onClick={()=>{getRecipes(searchQuery)}}>Search</button>
    </>
  );
};

export default SearchBar;
