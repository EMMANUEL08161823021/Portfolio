import React from 'react'
import Home from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Works from './components/Works'
import Experience from './components/Experience'
import Contact from './components/Contact'

const HomePage = () => {
     return (
          <div>
               <Home/>
               <Services/>
               <About/>
               <Experience/>
               <Works/>
               <Contact/>
          </div>
     )
}

export default HomePage