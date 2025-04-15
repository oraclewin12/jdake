import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileNavClick = (sectionId: string) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-jdake-dark-blue bg-opacity-95 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src="/images/jdake-logo.png" alt="JDake Intelligence" className="h-12" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-white hover:text-jdake-light-blue transition-colors">Home</a></li>
            <li><a href="#features" className="text-white hover:text-jdake-light-blue transition-colors">Features</a></li>
            <li><a href="#use-cases" className="text-white hover:text-jdake-light-blue transition-colors">Use Cases</a></li>
            <li><a href="#tech" className="text-white hover:text-jdake-light-blue transition-colors">Technology</a></li>
            <li><a href="#contact" className="text-white hover:text-jdake-light-blue transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-jdake-dark-blue">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            <li>
              <button onClick={() => handleMobileNavClick('home')} className="block w-full text-left text-white hover:text-jdake-light-blue">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleMobileNavClick('features')} className="block w-full text-left text-white hover:text-jdake-light-blue">
                Features
              </button>
            </li>
            <li>
              <button onClick={() => handleMobileNavClick('use-cases')} className="block w-full text-left text-white hover:text-jdake-light-blue">
                Use Cases
              </button>
            </li>
            <li>
              <button onClick={() => handleMobileNavClick('tech')} className="block w-full text-left text-white hover:text-jdake-light-blue">
                Technology
              </button>
            </li>
            <li>
              <button onClick={() => handleMobileNavClick('contact')} className="block w-full text-left text-white hover:text-jdake-light-blue">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
