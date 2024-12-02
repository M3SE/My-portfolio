import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Hide navbar when scrolling down
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo or Brand Name */}
        <div className="text-xl font-semibold">
          <a href="#home" className="hover:text-yellow-400 text-yellow-100 transition duration-300">
            My Portfolio
          </a>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="block md:hidden hover:text-yellow-400 bg-transparent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-6 md:space-y-0 md:space-x-8 absolute md:relative bg-black/80 md:bg-transparent top-16 md:top-auto right-0 w-full md:w-auto p-4 md:p-0`}
        >
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="#home" className="flex items-center space-x-2">
              <FaHome />
              <span>Home</span>
            </a>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="#projects" className="flex items-center space-x-2">
              <FaProjectDiagram />
              <span>My Projects</span>
            </a>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="#contact" className="flex items-center space-x-2">
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
