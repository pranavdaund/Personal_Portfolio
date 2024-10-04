import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logo, linkedin, github, twitter } from './img'
import './style.css'


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footer-top">
                    <Link to='' >
                        <img src={logo} alt="" className='footer-top-logo' />
                    </Link>
                    <Link to="tel:+919370510215" className='footer-top-contact'>
                        <p>+91 9370510215</p>
                    </Link>
                    <Link to="mailto:pranavdaund72@gmail.com" className='footer-top-mail'>
                        <p>pranavdaund72@gmail.com</p>
                    </Link>
                    <div className="footer-top-social">

                        <NavLink to={'https://www.linkedin.com/in/pranavdaund/'} target='_blank'>
                            <img src={linkedin} alt="" className='footer-top-icon' />
                        </NavLink>

                        <NavLink to={'https://github.com/pranavdaund/'} target='_blank'>
                            <img src={github} alt="" className='footer-top-icon' />
                        </NavLink>

                        <NavLink to={'https://x.com/pranav_daund/'} target='_blank'>
                            <img src={twitter} alt="" className='footer-top-icon' />
                        </NavLink >
                    </div>
                </div>
                <hr className='brek' />
                <div className="footer-bottom">
                    <ul className='footer-bottom-element'>
                        <li>
                            <NavLink to={''} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'about'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'techstack'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                Tech Stack
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'project'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'contact'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className='flex develper'>
                        Designated and built by  <pre className='footer-bottom-name'> Pranav Daund </pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;