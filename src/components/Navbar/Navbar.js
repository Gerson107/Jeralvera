import React, { useRef, useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './logo.png'
import './navbar.css';



const Menu = () => (
  <>
      <p><a href='#compromiso'>Compromiso</a></p>
      <p><a href='#about'>Conoceme</a></p>
      <p><a href='#experiencia'>Experiencia</a></p>
      <p><a href='#news'>Noticias</a></p>
      <p><a href='#contact'>Contacto</a></p> 
  </>
)

const Navbar = () => {


  
  const [ togglrMenu, setToggleMenu ] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) { // Ajusta el valor según tu diseño
      setIsNavFixed(true);
    } else {
      setIsNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const seccionDestinoRef = useRef(null);
  const scrollToSeccionDestino = () => {
    if (seccionDestinoRef.current) {
      seccionDestinoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className='img__bg'></div>
      <div className={`navigation ${isNavFixed ? 'fixed-navigation' : ''}`}>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
         <a href="#home"><img src={logo} alt="logo"/></a> 
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        {/* <button className='button_contr'type='button'>Contribuir</button> */}
        <button className='button_conta' type='button'>Contribuir</button>

      </div>
      <div className='gpt3__navbar-menu'>
        {togglrMenu
        ? <RiCloseLine color="#480354" size={30} onClick={() => setToggleMenu(false)}></RiCloseLine>
        : <RiMenu3Line color="#480354" size={40} onClick={() => setToggleMenu(true)}></RiMenu3Line>
      }
      { togglrMenu && (
        <div className='gpt3__navbar-menu_container scale-up-center'>
          <div className='gpt3__navbar-menu_container-links'>
            <Menu/>
              <div className='gpt3__navbar-menu_container-links-sign'>
                
                {/* <button className='button_contr' type='button'>Contribuir</button> */}

                <button className='button_conta' type='button'>Contribuir</button>
                <div>

                </div>
               </div>
            </div>
        </div>
      )}

      </div>
    </div>
    </>
  )
}

export default Navbar