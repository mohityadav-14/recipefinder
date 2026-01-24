# 🍱 Recipe Finder: Food Recipe Discovery Dashboard

A "little big" React project designed to master the fundamentals of state management, list mapping, and conditional rendering. This app allows users to browse recipes, filter by category, and manage a real-time favorites collection.

---

## 🚀 Features

* **Dynamic Recipe Rendering:** Maps through a data array to display recipe items.
* **Category Filtering:** Real-time filtering (Pizza, Burgers, Veg, etc.) using React state.
* **Persistent Favorites Sidebar:** A sticky favorites panel that updates instantly when recipes are added.
* **Responsive Grid:** A professional dashboard layout using CSS Grid and Flexbox.
* **Ingredient Display:** Automatically displays ingredients and cooking instructions for each recipe.

---

## 🛠️ Tech Stack

* **React.js** (Functional Components, Hooks)
* **CSS3** (Grid & Flexbox)
* **JavaScript** (ES6+)

---

## 📂 Project Structure
```
src/
├── components/
│   ├── RecipeList.js       # Maps the recipe array
│   ├── RecipeCard.js       # Individual recipe item UI
│   ├── CategoryFilter.js   # Category toggle logic
│   └── Favorites.js        # Sidebar favorites display
├── App.js                  # Main State & Logic hub
├── style.css               # Dashboard & Grid styling
└── index.js                # Entry point
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/mohityadav-14/recipefinder
```

2. **Navigate into the project folder**  
   (Crucial step to avoid the ENOENT error!)
```bash
cd recipe-finder
```

3. **Install dependencies**
```bash
npm install
```

4. **Start the development server**
```bash
npm run dev
```

---

## 🧠 What I Learned

* How to pass functions as props to update parent state from child components.
* Using `.filter()` and `.map()` to handle complex data displays.
* Implementing a **Sticky Sidebar** layout for better User Experience (UX).

---

## 🔮 Future Enhancements

* [ ] Add search functionality to find recipes by name or ingredient.
* [ ] Integrate `localStorage` to save favorites on refresh.
* [ ] Add a recipe detail modal with nutritional information.
* [ ] Implement recipe rating and review system.

---

## 📞 Contact

**Name:** Mohit Yadav 
 
**LinkedIn:** [[ LinkedIn Profile](https://www.linkedin.com/in/mohit-yadav-09282436b/)]  


---
