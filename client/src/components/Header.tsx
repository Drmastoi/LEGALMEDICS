import React, { useState } from 'react';
import { Link } from 'wouter';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800">LegalMedics</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/course" className="text-gray-700 hover:text-blue-600 font-medium">Course</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
          <Link href="/practice" className="text-gray-700 hover:text-blue-600 font-medium">Practice</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">Home</Link>
            <Link href="/course" className="text-gray-700 hover:text-blue-600 font-medium py-2">Course</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium py-2">Blog</Link>
            <Link href="/practice" className="text-gray-700 hover:text-blue-600 font-medium py-2">Practice</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
