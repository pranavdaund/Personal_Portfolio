import React from 'react'
// import './style.css'
import { logo, github, twitter, linkedin } from './img'
import { Link, NavLink } from 'react-router-dom'
import './style2.css'

function Header() {
  return (
    <>
      <header className='header'>
        <div className="header-main-div">
          <Link to={"/"} className='header-logo'>
            <img src={logo} alt="" className='header-logo-img ' />
          </Link>

          <ul className='header-elements'>
            <li>
              <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={'/techstack'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                Tech Stack
              </NavLink>
            </li>
            <li>
              <NavLink to={'/project'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="header-social">
            <Link to={'https://www.linkedin.com/in/pranavdaund'} target='_blank'> <img src={linkedin} alt="" className='header-social-icon' /> </Link>
            <Link to={'https://github.com/pranavdaund'} target='_blank'> <img src={github} alt="" className='header-social-icon' />   </Link>
            <Link to={'https://x.com/pranav_daund'} target='_blank'> <img src={twitter} alt="" className='header-social-icon' />  </Link >
          </div>

          <div className="header-menu">
            <input type="checkbox" id='check' className='hidden' />
            <label htmlFor="check" className='header-menu-icon'>&#9776;</label>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header