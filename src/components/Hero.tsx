import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626522858343-245ae146e308?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Indonesia's Premium Turmeric Source: Highest Curcumin Quality for the Global Market.
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto">
          We provide a stable supply of Wet, Dried, and Powdered Turmeric, sourced from the pristine and fertile soils of Sulawesi, meeting international export standards.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Guaranteed Curcumin Content</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Quality & Organic Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Efficient Worldwide Export Logistics</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 text-lg">
            Get CIF/FOB Quote
          </a>
          <a 
            href="https://wa.me/6283119226089" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-light transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Consult via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
