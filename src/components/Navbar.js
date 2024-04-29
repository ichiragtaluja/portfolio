// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-900">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">My Portfolio</h1>
        <ul className="flex space-x-4 text-gray-200">
          <li>
            <a
              href="#about"
              className="hover:text-white transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-white transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
