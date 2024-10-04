import React from 'react'
import './Header-style2.css'
import { logo, github, twitter, linkedin } from '../A_Header/Header1/img'
import { Link, NavLink } from 'react-router-dom'

function Header2() {
    return (
        <>
            <header class="header2 ">
                <div class="header-main-div ">
                    <div class="header-left ">
                        <Link href="">
                            <img src={logo} alt="" class="header-left-logo " />
                        </Link>
                    </div>
                    <div class="header-right ">
                        <ul class="header-elements ">
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

                        <div class="header-social ">
                            <Link href="">
                                <img src={linkedin} alt="" class="w-7" />
                            </Link>
                            <Link href="">
                                <img src={github} alt="" class="w-7" />
                            </Link>
                            <Link href="">
                                <img src={twitter} alt="" class="w-7" />
                            </Link>
                        </div>
                    </div>
                    <div class="header-menu ">
                        <input type="checkbox" name="" id="check" class="hidden" />
                        <label for="check" class="header-menu-icon text-xl font-semibold"> &#9776; </label>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header2