
import React from 'react'
import { BrowserRouter, Route,Routes,Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
import NavBar from './NavBar'
import One from './One'
import Privacy from './Privacy'

export default function SwitchComp() {
    return (
        <div>
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route exact path="/" element={<One />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/privacy" element={<Privacy />}></Route>
                </Routes>
            </BrowserRouter>
            <b>Switch Component is removed in the react router dom in the version 6</b>
        </div>
    )
}
