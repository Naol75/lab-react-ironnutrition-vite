import React from 'react';


export function FoodBox({ food: { name, calories, image, servings, id }, deleteFood }) {


    const handleDeleteFood = () => {
        deleteFood(id)
    
      }


    
    return (
      <div className="FoodBox">
        <p>{name}</p>
        <img src={image} alt={name} style={{width: "200px"}} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {servings * calories} kcal</b>
        </p>
        <button onClick={handleDeleteFood}>Delete</button>
      </div>
    );
  }