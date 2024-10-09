import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={`${process.env.PUBLIC_URL}/images/eaziride-logo.png`} 
              alt="EaziRide Logo" 
              className="h-10 w-auto mr-2"
            />
            <Link to="/" className="text-white text-2xl font-bold"></Link>
          </div>
          
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-red-500 transition duration-300">Home</Link>
            <Link to="/about" className="text-white hover:text-red-500 transition duration-300">About</Link>
            <Link to="/services" className="text-white hover:text-red-500 transition duration-300">Services</Link>
            <Link to="/contact" className="text-white hover:text-red-500 transition duration-300">Contact</Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-white hover:text-red-500 transition duration-300" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-white hover:text-red-500 transition duration-300" onClick={toggleMenu}>About</Link>
              <Link to="/services" className="text-white hover:text-red-500 transition duration-300" onClick={toggleMenu}>Services</Link>
              <Link to="/contact" className="text-white hover:text-red-500 transition duration-300" onClick={toggleMenu}>Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;