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
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<PrivateRoute><Recipies></Recipies></PrivateRoute>,
        loader:({params})=>fetch(`https://b7a10-chef-recipe-hunter-server-side-arnab-nayan-arnabnayan.vercel.app/chefs/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
)
