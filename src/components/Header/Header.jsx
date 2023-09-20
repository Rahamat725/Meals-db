import { Outlet, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import './header.css'

const Header = () => {
    const data = useLoaderData();
    // console.log(data.categories)
    const categories = data.meals;
    return (
        <div>
            {/* <h2>Categories: {categories.length}</h2> */}
            <h2 className="header2"><span className="header">Meals</span></h2>
            <nav className="menu">
            {
              categories.map((category,indx) => <Category key={indx} category={category}></Category>)
            }
            </nav>

           <Outlet></Outlet>
        </div>
    );
};

export default Header;