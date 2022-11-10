import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/home";
import { NewArticles } from "./pages/newArticles";
import Popular from './pages/popular';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <NewArticles />
  },
  {
    path: '/popular',
    element: <Popular />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
