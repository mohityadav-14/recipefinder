// import { useState } from "react"; //
// import SearchBar from "./Component/SearchBar";
// import "./App.css";
// import RecipeDetails from "./Component/RecipeDetails";
// import RecipeList from "./Component/RecipeList";
// import Home from "./Component/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./assets/style.css";

// function App() {
//   const [recipes, setRecipes] = useState([]); //Stores API results
//   const [loading, setLoading] = useState(false); //Shows a spineer loading
//   const [error, setError] = useState("");

//   const getRecipes = async (query) => {
//     if (!query) {
//       setError("Please enter Fruits or vegetable ");
//       return;
//     } //simple validation

//     setLoading(true); //start loading
//     try {
//       // 1 call the api using fetch
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//       );
//       //2 convert the response into  json
//       const data = await response.json();
//       // 3  using the data
//       setRecipes(data.meals); //update state with resultes
//       setLoading(false); //stop loading
//     } catch (error) {
//       console.error("Error fetching data", error);
//       setLoading(false);
//     }
//   };

//   return (

//     <BrowserRouter>
   
    
//     <div className="app-container">
//       <h1>Recipe Finder</h1>


//  <Routes>
//  <Route path="/" element={<Home
//         loading={loading}
//         getRecipes={getRecipes}
//         error={error}
//         recipes={recipes}/>} />

//       <Route path="/recipe/:id" element={<RecipeDetails/>}/>
     
//  </Routes>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;






// import React,{useState} from 'react';
// import "./assets/style1.css"
//import "./App.css";

// const quotes = [
//   { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", color: "#FF6347" },
//   { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", color: "#6A5ACD" },
//   { text: "Stay hungry, stay foolish.", author: "Steve Jobs", color: "#2E8B57" },
//   { text: "The future depends on what you do today.", author: "Mahatma Gandhi", color: "#DEB887" },
//   { text: "Don't count the days, make the days count.", author: "Muhammad Ali", color: "#4682B4" },
// ];
// const App = () => {
//   const [quote,setQuote]=useState(quote[0]);

//   const getNewQuote=()=>{
//     const randomIndex=Math.floor(Math.ramdom()*quote.length);
//     setQuote(quotes[randomIndex]);
//   };
  
//   return (
//     <div className='main-wrapper' style={{backgroundColor:quote.color }}>
//      <div className='quote-box'>
//      <h2 className='text'>{quote.text}</h2>
//      <p className='author'>{quote.author}</p>
//      <button onClick={getNewQuote}
//      style={{color:"quote.color"}}>
//      New Quote  
//      </button>

//      </div>
//     </div>
//   )
// }

// export default App




import React, { useState } from "react";
import "./assets/style1.css"
import "./App.css";

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", color: "#FF6347" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", color: "#6A5ACD" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs", color: "#2E8B57" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi", color: "#DEB887" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali", color: "#4682B4" },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="main-wrapper" style={{ backgroundColor: quote.color }}>
      <div className="quote-box">
        <h2 className="text">"{quote.text}"</h2>
        <p className="author">- {quote.author}</p>
        <button 
          onClick={getNewQuote} 
          style={{ color: quote.color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;