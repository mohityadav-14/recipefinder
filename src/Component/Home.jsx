import React from 'react'
import SearchBar from './SearchBar'
import RecipeList from './RecipeList'

const Home = ( { loading,getRecipes ,error ,recipes }) => {

  return (
   
    <>
       <SearchBar  getRecipes={getRecipes} error={error} />
     { loading ? <p> Loading...</p>: <RecipeList recipes={recipes}/> } 
    </>
  )
}

export default Home
