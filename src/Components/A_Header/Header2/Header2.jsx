import React, { useState } from 'react'
import './Header-style2.css'
import { logo, github, twitter, linkedin } from './img'
import { Link, NavLink } from 'react-router-dom'

function Header2() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <header className="header ">
                <div className="header-main-div ">
                    <div className="header-left ">
                        <Link to={''}>
                            <img src={logo} alt="" className="header-left-logo " />
                        </Link>
                    </div>
                    <div className={`header-right ${isOpen ? "menu-mobile" : "menu-web"}`} >
                        <ul className="header-elements ">
                            <li>
                                <NavLink to={''} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'about'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'techstack'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                                    Tech Stack
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'project'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'contact'} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} header-element-link`}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                        <div className="header-social ">
                            <Link to={'https://www.linkedin.com/in/pranavdaund'} target='_blank'>
                                <img src={linkedin} alt="" className="w-7 header-social-icon" />
                            </Link>
                            <Link to={'https://github.com/pranavdaund'} target='_blank'>
                                <img src={github} alt="" className="w-7 header-social-icon" />
                            </Link>
                            <Link to={'https://x.com/pranav_daund'} target='_blank'>
                                <img src={twitter} alt="" className="w-7 header-social-icon" />
                            </Link>
                        </div>
                    </div>

                    <div className="header-menu" onClick={toggleMenu}>
                        <button onClick={toggleMenu}>
                            <label f className="header-menu-icon  "> &#9776; </label>
                            {/* <label for="check" className="header-menu-icon  "> &#88; </label> */}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header2