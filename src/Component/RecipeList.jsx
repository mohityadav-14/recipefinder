import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  console.log(recipes);

 if(!recipes)return<p>No results found</p>

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal} // passing the id into key 
             id={recipe.idMeal} 
          title={recipe.strMeal}
          image={recipe.strMealThumb}
           
        />
      ))}
    </div>
  );
};

export default RecipeList


