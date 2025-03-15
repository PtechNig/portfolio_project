import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu toggle

const NavBar = ({ scrollToSection, heroRef, aboutRef, workRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-[#222831] text-white py-5 px-5 md:px-10'>
      <div className=' w-[90%] mx-auto flex justify-between items-center '>

        {/* Logo */}
        <h1 className='text-2xl md:text-3xl font-bold'>Oluwaseun Paul</h1>

        {/* Hamburger Menu (Mobile) */}
        <div className='md:hidden text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul className={`md:flex gap-8 absolute md:static left-0 top-16 w-full md:w-auto bg-[#222831] md:bg-transparent p-5 md:p-0 flex-col md:flex-row items-center md:items-center transition-all duration-300 ${menuOpen ? 'block' : 'hidden md:flex'
          }`}>


          <li className="font-bold py-1 px-3 rounded-md cursor-pointer hover:text-[#00ADB5] duration-500"
            onClick={() => scrollToSection(heroRef)}>Home</li>
          <li className="font-bold py-1 px-3 rounded-md cursor-pointer hover:text-[#00ADB5] duration-500"
            onClick={() => scrollToSection(aboutRef)}>About Me</li>
          <li className="font-bold py-1 px-3 rounded-md cursor-pointer hover:text-[#00ADB5] duration-500"
            onClick={() => scrollToSection(workRef)}>Work</li>
          <li className="font-bold py-1 px-3 rounded-md cursor-pointer hover:text-[#00ADB5] duration-500"
            onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
