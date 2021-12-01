import React from 'react'
import daedalusLogo from '../images/logo.png'

const Footer = () => {
    return (
        <div className="flex justify-between p-4 bg-green-600">
            <a href="#home"><img className="" src={daedalusLogo} alt="Nautilus shell" /></a>
            <a href="https://github.com/DaedalusFiction" target="_blank" rel="noreferrer">
            <i className="fab fa-github text-gray-100 transform scale-150"></i>
            </a>
        </div>
    )
}

export default Footer
