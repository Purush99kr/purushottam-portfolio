import { createBrowserRouter, RouterProvider,Routes,Route,redirect,Link, BrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/layout/Layout.jsx'
import Project from './Pages/Project.jsx'
import Resume from './Pages/Resume.jsx'
import About from './Pages/About.jsx'
import Template from "./components/Template.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Template />} />
      <Route path='about' element={<About />} />
      <Route path='project' element={<Project />} />
      <Route path='resume' element={<Resume />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
