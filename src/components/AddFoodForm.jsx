import { useState } from "react";

export function AddFoodForm({ handleAddFood }) {
  const firstValue = {
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  };

  const [foodItem, setFoodItem] = useState(firstValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFoodItem((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddFood(foodItem); 
    setFoodItem(firstValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={foodItem.name}
        onChange={handleChange}
      />
      <label>Image</label>
      <input
        type="text"
        name="image"
        value={foodItem.image}
        onChange={handleChange}
      />
      <label>Calories</label>
      <input
        type="number"
        name="calories"
        value={foodItem.calories}
        onChange={handleChange}
      />
      <label>Servings</label>
      <input
        type="number"
        name="servings"
        value={foodItem.servings}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
  };
  
  