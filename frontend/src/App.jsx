// Core React Functionalities
import { useState, useEffect } from "react"
// React Router for webpage routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Piece components:
import Header from './components/Header.jsx'

// Webpage views:
import Index from './views/Index.jsx'
import Home from './views/Home.jsx'
import About from './views/About.jsx'
// import NotFound from './views/Not_Found.jsx'

function App() {

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/index' element={<Index />} />
                </Routes>
            </Router>
        </>
    );
}

export default App