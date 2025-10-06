import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sulawesi Turmeric Exports. All Rights Reserved.</p>
        <p className="text-sm mt-2">Your Partner in Premium Spice Exports</p>
      </div>
    </footer>
  );
};

export default Footer;
