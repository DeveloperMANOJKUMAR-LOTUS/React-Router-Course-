import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import About from './About'
import Home from './Home'
import NavBar from './NavBar'
import Privacy from './Privacy'
import './unstl.css'

export default function RecLink() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                   <Route path="/home" element={<Home />}></Route>
                   <Route path="/about" element={<About />}></Route>
                   <Route path="/privacy" element={<Privacy />}></Route>
            </Routes>
        </BrowserRouter>


             
    
    )
}
