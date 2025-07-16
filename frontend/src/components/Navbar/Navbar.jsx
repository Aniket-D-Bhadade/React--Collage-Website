import React , {useState , useEffect} from 'react'
import "./Navbar.css"
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll';


const Navbar = () => {
  const [sticky,setsticky] = useState(false) ;
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY >600 ? setsticky(true) : setsticky(false) ;
    })   
  }, [])
  
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}` }>
        <img src={Logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={-150} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campous' smooth={true} offset={-260} duration={500}>Campous</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></button></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
