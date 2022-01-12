import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Privacy from './Privacy'

export default function BrowserRoute() {
    return (
        <div>
            <BrowserRouter>
               <Routes>
                   <Route path="/home" element={<Home />}></Route>
                   <Route path="/about" element={<About />}></Route>
                   <Route path="/privacy" element={<Privacy />}></Route>
               </Routes>
            </BrowserRouter>
        </div>
    )
}
