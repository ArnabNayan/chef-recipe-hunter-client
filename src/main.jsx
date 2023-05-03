import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Layout/Login/Login.jsx';
import Register from './Components/Layout/Register/Register.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Recipies from './Components/Recipies/Recipies.jsx';

const router=createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'/recipe/:id',
        element:<Recipies></Recipies>,
        loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
