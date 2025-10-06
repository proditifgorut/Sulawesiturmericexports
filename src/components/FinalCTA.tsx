import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Don't Let Your Turmeric Quality Be a Question Mark.
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-amber-200 mb-8">
          Our export expert team is ready to guide you from order placement to cargo arrival at your destination port.
        </p>
        <a href="#contact" className="bg-primary text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 text-xl">
          Start Your Trial Order Today!
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
