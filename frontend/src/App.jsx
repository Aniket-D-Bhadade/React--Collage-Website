import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campous from './components/Campous/Campous'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle="OUR programs" title="What we offer ..."/>
        <Programs/>
        <About/>
        <Title subtitle="Gallary" title="Campous photos.."/>
        <Campous/>
        <Title subtitle="TESTIMONIALS" title="what the student says..."/>
        <Testimonials/>
        <Title subtitle="Contact us" title="Getting touch .."/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
