import React from 'react'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {

  let router=createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"contact",element:<Contact/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"about",element:<About/>},

    ]}
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
