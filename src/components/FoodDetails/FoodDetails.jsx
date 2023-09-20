import { useLoaderData, useNavigate } from "react-router-dom";
import './foodDetails.css'

const FoodDetails = () => {
   const Details = useLoaderData();
   console.log(Details.meals);
   const foodDetails = Details.meals;
   const {strMeal,strInstructions,strMealThumb,strCategory} =foodDetails[0];

  const navigate=useNavigate();

const backToPage = () =>{
    navigate(-1)
}
    
    return (
        <div className="box-details">
            <div>
                <img src={strMealThumb} alt="" />
            </div>
            <div className="">
                <h4>{strMeal}</h4>
                <p className="box2">{strInstructions}</p>
                <button className="back-btn" onClick={backToPage}>Go Back</button>
            </div>
        </div>
    );
};

export default FoodDetails;