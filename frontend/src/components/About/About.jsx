import React from 'react'
import './About.css'
import About_image from '../../assets/about.png'
import Play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={About_image} alt="" className='aboutImage' />
            <img src={Play_icon} alt="" className='PlayImage' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3> 
            <h2>Nothing spacial just another description ........ </h2>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ex sunt. Quia officia numquam iusto tempore eligendi laudantium qui facilis placeat magnam, iste laboriosam cupiditate libero dignissimos vero et maxime autem, ducimus tempora. Repudiandae ex exercitationem ipsam aperiam reiciendis reprehenderit, fugiat odit error mollitia porro soluta illum earum ducimus quibusdam.</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ex sunt. Quia officia numquam iusto tempore eligendi laudantium qui facilis placeat magnam, iste laboriosam cupiditate libero dignissimos vero et maxime autem, ducimus tempora. Repudiandae ex exercitationem ipsam aperiam reiciendis reprehenderit, fugiat odit error mollitia porro soluta illum earum ducimus quibusdam.</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ex sunt. Quia officia numquam iusto tempore eligendi laudantium qui facilis placeat magnam, iste laboriosam cupiditate libero dignissimos vero et maxime autem, ducimus tempora. Repudiandae ex exercitationem ipsam aperiam reiciendis reprehenderit, fugiat odit error mollitia porro soluta illum earum ducimus quibusdam.</p> 
            
        </div>     
    </div>
  )
}

export default About
