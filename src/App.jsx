import "./App.css";
import React from "react";
import foods from './foods.json'
import { FoodBox } from "./components/FoodBox";
import { useState } from "react";
import { AddFoodForm } from "./components/AddFoodForm";



function App() {
  const [foodsList, setFoodsList] = useState(foods);

  const handleAddFood = (newFood) => {
    setFoodsList([...foodsList, newFood]);
  };

  const deleteFood = (id) => {
    let filteredArr = foodsList.filter((eachFood) => eachFood.id !== id);
    setFoodsList(filteredArr);
  };

  return (
    <div className="App">
      <AddFoodForm handleAddFood={handleAddFood} />
      {foodsList.map((eachFood) => (
        <FoodBox key={eachFood.id} food={eachFood} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;
