import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Food from './components/Food/Food.jsx';
import FoodDetails from './components/FoodDetails/FoodDetails.jsx';

const router = createBrowserRouter([
         {
          path:'/',
          loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
          element:<Header></Header>,

          children:[
            {
              path:'/food/:foodName',
              loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.foodName}`),
              element:<Food></Food>
            },
            {
              path:'/foodDetails/:foodId',
              loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`),
              element:<FoodDetails></FoodDetails>
            }
          ]
         }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
