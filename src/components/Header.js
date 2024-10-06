import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-opacity-50">
        <div className="flex items-center">
          <img src={`${process.env.PUBLIC_URL}/images/eaziride-logo.png`} alt="EaziRide Logo" className="h-10 w-auto mr-2" />
          <Link to="/" className="text-2xl font-bold text-white"></Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-red hover:text-white">Home</Link>
          <Link to="/ride-with-us" className="text-red hover:text-white">Ride with Us</Link>
          <Link to="/driver-owner" className="text-red hover:text-white">Become a Driver</Link>
          <Link to="/contact" className="text-white hover:text-red-500">Contact</Link>
        </nav>
        <div className="md:hidden">
          {/* Add a mobile menu button here if needed */}
        </div>
      </div>
    </header>
  );
}

export default Header;