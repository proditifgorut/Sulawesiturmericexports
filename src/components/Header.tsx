import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-primary" />
          <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}>Sulawesi Turmeric Exports</span>
        </a>
        <nav>
          <a href="#contact" className="bg-primary text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
