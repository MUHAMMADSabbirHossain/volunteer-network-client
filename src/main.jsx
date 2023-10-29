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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/events",
        element: <Events></Events>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      }
    ]

  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
