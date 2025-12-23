import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ title, image,id }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} style={{ width: "200px" }} />
      <h3>{title}</h3>
      <Link to={`/recipe/${id}`}>

      <button className="view-btn">
        {" "}
        View Recipes{" "}
      </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
