import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Signin from "./pages/signin/signin.tsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/signup/signup.tsx'
import Data from './pages/data/data.tsx'
import  { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/data",
    element: <Data />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
