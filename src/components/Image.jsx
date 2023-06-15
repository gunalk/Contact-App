import React from 'react'
import "./Image.css"

import { Link } from 'react-router-dom'

const Image = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="into-img" src="https://e0.pxfuel.com/wallpapers/772/405/desktop-wallpaper-javascript-code-web-development-and-mobile-background.jpg" alt='IntroImg'/>
        </div>
        <div className='content'>
            <p>Hi,I'M A WEB DEVELOPER</p>
            <h1>React Developer</h1>
            <div>
                <Link to="./project" className='btn'>
                    Projects
                </Link>
                <Link to="./contact" className='btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Image