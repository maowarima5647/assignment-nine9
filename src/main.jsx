import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from './assets/component/Root.jsx';

import Login from './assets/component/Login.jsx';
import Register from './assets/component/Register.jsx';
import Home from './assets/component/Home.jsx';
import Authprovider from './assets/component/Authprovider.jsx';
import Profile from './assets/component/Profile.jsx';
import Privaterout from './assets/component/Privaterout.jsx';
import Aboutdev from './assets/component/Aboutdev.jsx';
import Brands from './assets/component/Brands.jsx';
import Details from './assets/component/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('/brand.json')
      },
      {
        path: "login",
        element: <Login></Login>
      }, 
      {
        path: "register",
        element: <Register></Register>
      },

      {
        path: "profile",
        element: <Privaterout><Profile></Profile></Privaterout>
      },


      {
        path: "about",
        element: <Privaterout><Aboutdev></Aboutdev></Privaterout>
      },
      {
        path: "brands",
        element: <Privaterout><Brands></Brands></Privaterout>,
        loader:() => fetch('/brand.json')
      },


      {
       
  path: "/details/:id",
  element: (
    <Privaterout>
      <Details />
    </Privaterout>
  ),
  loader: async ({ params }) => {
    const response = await fetch('/brand.json');
    const brands = await response.json();
    return brands.find((brand) => brand._id === params.id); 
  },

        
      },


    ]
  }
 
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
