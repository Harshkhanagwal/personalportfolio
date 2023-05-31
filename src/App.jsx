import React from 'react'
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Globalcontext } from './context/context';
import { useContext } from 'react';

import Header from './components/Header'
import Nav from './components/Nav';
import Loader from './components/loader';
import Footer from './components/sections/Footer';

import './style/nav.css'

import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    const { menu, theme } = useContext(Globalcontext);

    return (
        <>
            {
                loading ?

                    <Loader />

                    :
                    <Router>

                    <div className="mainbody">
                        <div className={menu ? 'leftbx ' : 'leftbx shift '}>
                            <Header />
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                    <Route path='/about' element={<About />} />
                                    <Route path='/projects' element={<Projects />} />
                                    <Route path='/contact' element={<Contact />} />


                                    <Route path='/*' element={<h1>ERROR</h1>} />
                                </Routes>
                            <Footer />
                        </div>
                        <div className={menu ? `rightbx ${theme}`  : `rightbx show ${theme}`}>
                            <Nav />
                        </div>
                    </div>
                    </Router>


            }

        </>
    )
}

export default App
