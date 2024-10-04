import React from 'react'
import './Footer-style2.css'
import { logo, github, twitter, linkedin, logo2 } from './img'
import { Link, NavLink } from 'react-router-dom'

function Footer2() {
    return (
        <>
            <footer class="footer">
                <div class="footer-main-div">
                    <div class="footer-top ">
                        <div class="footer-top-left  ">
                            <Link to={""}>
                                <img src={logo2} class="footer-top-logo" alt="" />
                            </Link>
                        </div>

                        <div class="footer-top-right">

                            <div class="footer-top-contact" >
                                <Link to={"tel:+919370510215"}>+91 9370510215</Link>
                                <Link to={"mailto:pranavaund72@gmail.com"}>pranavdaund72@gmail.com</Link>
                            </div>

                            <div class="footer-top-social ">
                                <Link to={'https://www.linkedin.com/in/pranavdaund'} target='_blank'>
                                    <img src={linkedin} alt="" class="w-7 footer-top-social-icon" />
                                </Link>

                                <Link to={'https://github.com/pranavdaund'} target='_blank'>
                                    <img src={github} alt="" class="w-7 footer-top-social-icon" />
                                </Link>

                                <Link to={'https://x.com/pranav_daund'} target='_blank'>
                                    <img src={twitter} alt="" class="w-7 footer-top-social-icon" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    <hr className='brek' />

                    <div className="footer-bottom">
                        <ul className='footer-bottom-element'>
                            <li>
                                <NavLink to={''} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} footer-element-link`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'about'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} footer-element-link`}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'techstack'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} footer-element-link`}>
                                    Tech Stack
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'project'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} footer-element-link`}>
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'contact'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} footer-element-link`}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className='flex'>
                            Designated and built by  <pre className='footer-bottom-name'> Pranav Daund </pre>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer2