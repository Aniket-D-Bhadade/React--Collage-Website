import React from 'react'
import "./Hero.css"
import Dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for better world ...</h1>
            <p>Hii my name is Aniket Bhadade and i am the web developer and create this website for learning purpose . just enjoy your life and stay happy bye and love you ........</p>
            <button className='btn'>Explore More <img src={Dark_arrow} alt="" /></button>
        </div>  
      
    </div>
  )
}

export default Hero
