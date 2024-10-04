import { useState } from 'react';

function Demo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">MyLogo</div>

                {/* Menu for large screens */}
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-white hover:text-gray-300">
                        Home
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        About
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Services
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Contact
                    </a>
                </div>

                {/* Hamburger Icon for small screens */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menu for small screens */}
            {isOpen && (
                <div className="md:hidden bg-blue-500">
                    <a href="#" className="block text-white py-2 px-4">
                        Home
                    </a>
                    <a href="#" className="block text-white py-2 px-4">
                        About
                    </a>
                    <a href="#" className="block text-white py-2 px-4">
                        Services
                    </a>
                    <a href="#" className="block text-white py-2 px-4">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Demo;
