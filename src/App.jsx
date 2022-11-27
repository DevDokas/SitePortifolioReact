//React & Etc
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import Home from './pages/pageHome/pageHome.jsx'
import About from  './pages/pageAbout/pageAbout.jsx'
import Profile from './pages/pageProfile/pageProfile.jsx'
import Login from './pages/pageLogin/pageLogin.jsx'

import './App.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path='/' element={<Home/>} />
        {/* About */}
        <Route path='/about' element={<About/>} />
        {/* Profile */}
        <Route path='/profile' element={<Profile/>} />
        {/* Login */}
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}