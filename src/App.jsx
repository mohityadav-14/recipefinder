import { useState } from "react"; //
import SearchBar from "./Component/SearchBar";
import "./App.css";
import RecipeDetails from "./Component/RecipeDetails";
import RecipeList from "./Component/RecipeList";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]); //Stores API results
  const [loading, setLoading] = useState(false); //Shows a spineer loading
  const [error, setError] = useState("");

  const getRecipes = async (query) => {
    if (!query) {
      setError("Please enter Fruits or vegetable ");
      return;
    } //simple validation

    setLoading(true); //start loading
    try {
      // 1 call the api using fetch
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      //2 convert the response into  json
      const data = await response.json();
      // 3  using the data
      setRecipes(data.meals); //update state with resultes
      setLoading(false); //stop loading
    } catch (error) {
      console.error("Error fetching data", error);
      setLoading(false);
    }
  };

  return (

    <BrowserRouter>
   
    
    <div className="app-container">
      <h1>Recipe Finder</h1>


 <Routes>
 <Route path="/" element={<Home
        loading={loading}
        getRecipes={getRecipes}
        error={error}
        recipes={recipes}/>} />

      <Route path="/recipe/:id" element={<RecipeDetails/>}/>
     
 </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
