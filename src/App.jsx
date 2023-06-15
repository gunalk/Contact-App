import React from 'react'
import "./App.css"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Project" element={<Project/>}/>
      </Routes></div>
  )
}

export default App