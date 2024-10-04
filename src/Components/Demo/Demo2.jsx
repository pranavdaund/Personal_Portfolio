import React, { useState } from 'react';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger icon for small screens */}
            <div className="block md:hidden p-4" onClick={toggleMenu}>
                <span className="text-2xl">&#9776;</span>
            </div>

            {/* Menu items */}
            <nav className={`absolute right-0 mt-2 p-4 bg-white shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="space-y-2">
                    <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
                    <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
                    <li><a href="#services" className="text-gray-700 hover:text-blue-500">Services</a></li>
                    <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
