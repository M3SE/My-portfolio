import React, { useState } from "react";
import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold tracking-wide">
          <a href="#home" className="hover:text-orange-500 transition duration-300">
            My Portfolio
          </a>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="block md:hidden text-white hover:text-orange-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:relative bg-gray-800 md:bg-transparent top-16 md:top-auto left-0 w-full md:w-auto md:flex space-y-6 md:space-y-0 md:space-x-8 p-4 md:p-0`}
        >
          <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
            <FaHome />
            <a href="#home" className="block">
              Home
            </a>
          </li>
          <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
            <FaProjectDiagram />
            <a href="#projects" className="block">
              My Projects
            </a>
          </li>
          <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
            <FaEnvelope />
            <a href="#contact" className="block">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
