import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isSpecialPage = location.pathname === '/support' || location.pathname === '/contact';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkStyle = isSpecialPage ? "text-black hover:text-red-500 transition duration-300" : "text-white hover:text-red-500 transition duration-300";

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 ${isSpecialPage ? 'bg-grey' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={`${process.env.PUBLIC_URL}/images/newLogo2.png`} 
                alt="EaziRide Logo" 
                className="h-16 w-auto mr-2 cursor-pointer"
              />
            </Link>
          </div>
          
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={isSpecialPage ? "text-black focus:outline-none" : "text-white focus:outline-none"}>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className={linkStyle}>Home</Link>
            <Link to="/earn-100-profits" className={linkStyle}>Earn 100% Profits</Link>
            <Link to="/support" className={linkStyle}>Support</Link>
            <Link to="/contact" className={linkStyle}>Contact</Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <div className="flex flex-col mb-14 text-right space-y-2">
              <Link to="/" className={linkStyle} onClick={toggleMenu}>Home</Link>
              <Link to="/earn-100-profits" className={linkStyle} onClick={toggleMenu}>Earn 100% Profits</Link>
              <Link to="/support" className={linkStyle} onClick={toggleMenu}>Support</Link>
              <Link to="/contact" className={linkStyle} onClick={toggleMenu}>Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
