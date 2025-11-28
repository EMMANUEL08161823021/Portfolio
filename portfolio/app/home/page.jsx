import React from 'react'
import Home from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Works from './components/Works'

const HomePage = () => {
     return (
          <div>
               <Home/>
               <Services/>
               <About/>
               <Works/>
          </div>
     )
}

export default HomePage