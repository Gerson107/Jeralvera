import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './SocialBar.css'

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a href="https://www.facebook.com/Jeravera22" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com/vera_jeraldin" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  )
}

export default SocialBar