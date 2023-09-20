import { Link, useNavigate } from "react-router-dom";
import './foodItems.css'

const FoodItems = ({food}) => {
    const {idMeal,strMeal,strMealThumb} = food;
     
    const navigate = useNavigate();

    const handleFoodDetails = () =>{
              navigate(`/foodDetails/${idMeal}`)
    }
    return (
        <div>
            <h3> {strMeal}</h3>
            <img src={strMealThumb} alt="" />
            <h4>Id: {idMeal}</h4>
            
            <button className="details-btn" onClick={handleFoodDetails}>Show Details</button>
        </div>
    );
};

export default FoodItems;