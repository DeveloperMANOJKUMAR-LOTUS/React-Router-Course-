import React from 'react'
import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Privacy from './Privacy'
import './unstl.css'

export default function ReNavLink() {
    return (
        <div>
            <BrowserRouter>
              <div className='header'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/privacy">Privacy</NavLink>
                <NavLink to="/about">About</NavLink>
              </div>
                <Routes>
                   <Route path="/home" element={<Home />}></Route>
                   <Route path="/about" element={<About />}></Route>
                   <Route path="/privacy" element={<Privacy />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
