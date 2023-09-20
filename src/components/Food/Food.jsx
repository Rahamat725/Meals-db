import { useLoaderData } from "react-router-dom";
import FoodItems from "../FoodItems/FoodItems";
import './Food.css'

const Food = () => {
    const foods = useLoaderData();
    // console.log(foods.meals)
const foodData = foods.meals;
    
    // console.log(strMeal.idMeal)
    return (
        <div className="box">
          {
            foodData.map(food => <FoodItems key={food.idMeal} food={food}></FoodItems>)
          }
        </div>
    );
};

export default Food;