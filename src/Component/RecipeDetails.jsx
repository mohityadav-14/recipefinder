import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // 1 call the api using fetch
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        // 2 convert response into json
        const data = await response.json();
        // 3 use the  data
        setRecipe(data.meals[0]);
        setLoading(false); //
      } catch (error) {
        console.error("Could not fetch details", error);
        setLoading(false); //
      }
    };
    fetchDetails();
  }, [id]); //useEffect will rerendor only if id changes

  if (loading) return <h2 className="loader">loading tasty details ...</h2>;
  if (!recipe) return <h2>Recipe not found !</h2>;
  console.log("recipes details ", recipe);

  return (
    <div className="details-container">   

      <Link to="/">
        {" "}
        <button>🔙 Back to Home </button>
      </Link>
      <h1>{recipe.strMeal} </h1>
      <div className="details-content">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={{ width: "400px" }}
        />
       {/* Change this line in your return statement */}
<span className="category-badge">🏷️ {recipe.strCategory}</span>

{/* And in the ingredients section, adding the measurements makes it even better */}
<div className="ingredients">

<ul>
  {Object.keys(recipe).map((key) => {
    if (key.includes("strIngredient") && recipe[key]) {
      const index = key.replace("strIngredient", "");
      const measure = recipe[`strMeasure${index}`]; // Gets the matching amount
      return (
        <li key={key}>
          <strong>{measure}</strong> {recipe[key]}
        </li>
      );
    }
    return null;
  })}
</ul>
</div>
    </div>
<div className="instructions">
<h4> Instructions</h4>
<p>{ recipe.strInstructions}</p>

</div>
    
  </div>
  )
}

export default RecipeDetails;
