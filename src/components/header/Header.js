import React from 'react'
import Navbar from '../Navbar/Navbar.js'
import './Header.css'
import Marca from '../../assets/logo.png'
const Header = () => {
  return (
    <>

    <div className='img__bg'>
    <Navbar/>
    <div className='img__text'>
    <h1>A LA ASAMBLEA DEPARTAMENTAL MARCA</h1>
    <img src={Marca} alt='marca'/>
    </div>

    
        </div>
    </>
    
    
  )
}

export default Header