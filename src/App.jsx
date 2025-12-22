
import { useEffect, useState } from 'react';
import SearchBar from './Component/SearchBar';
import './App.css'

import RecipeList from './Component/RecipeList';

function App() {
 const [recipes, setRecipes]=useState([]);//Stores API results 
 const [loading,setLoading]=useState(false);//Shows a spineer loading
 const [searchQuery,setSearchQuery]=useState("") //User input for search

  const getRecipes= async (query)=>{
    if(!query)return; //simple velidation 
  
     setLoading(true); //start loading
     try{
      // 1 call the api using fetch
      const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      //2 convert the response into  json 
      const data=await response.json();
   // 3  using the data 
         setRecipes(data.meals); //update state with resultes
         setLoading(false); //stop loading

   
        }
        catch(error){
       console.error("Error fetching data" ,error);
       setLoading(false);

        }
  }


  
  return (
    

 <div>
  <h1>Recipe Finder</h1>


  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} getRecipes={getRecipes}/>
 <RecipeList recipes={recipes}/>
 </div>
    
     
  )    
}

export default App;
