import {NavLink, useNavigate } from "react-router-dom";
import './category.css'

const Category = ({category}) => {

    const navigate = useNavigate();

    const {strCategory} = category;
 

    // const handleCategory = () =>{
    //           navigate(`/food/${strCategory}`)
    // }

    const style={
        backgroundColor:"red",
        color:'red'
    }
    return (
        <div >
           <nav id="bbt">
           
            {/* <button onClick={()=>handleCategory()} style={buttonStyle}>{strCategory}</button> */}
            
            <NavLink  to={`/food/${strCategory}`}>{strCategory}</NavLink>
           
      


{/* <NavLink
  to={`/food/${strCategory}`}
  style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
    };
  }}
>
{strCategory}
</NavLink> */}
           </nav>


           
        </div>
    );
};

export default Category;