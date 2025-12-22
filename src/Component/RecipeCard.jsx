import React from 'react'

const RecipeCard = ({title,image}) => {
  return (
 <div className='card'>
 <img src={image} alt={title}  style={{width:"200px"}}/>
 <h3>{title}</h3>
 <button onClick={()=>{alert(`Showing  the full recipe for ${title} `)}}> View Recipes </button>  

 </div>   
    
  )
}

export default RecipeCard
