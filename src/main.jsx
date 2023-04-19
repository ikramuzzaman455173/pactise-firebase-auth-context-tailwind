import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AuthProvider from './AuthProvider/AuthProvider'
import ErrorPage from './Components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'register',
        element:<Register/>
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<AuthProvider><RouterProvider router={router} /></AuthProvider>)
