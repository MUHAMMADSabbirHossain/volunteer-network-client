import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './Components/Blogs/Blogs.jsx';
import Events from './Components/Events/Events.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Home from './Components/Home/Home.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import AddVolunteer from './Components/AddVolunteer/AddVolunteer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "addvolunteer",
        element: <AddVolunteer></AddVolunteer>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/events",
        element: <Events></Events>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
