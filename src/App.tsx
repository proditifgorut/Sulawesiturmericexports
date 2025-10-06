import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Trust from './components/Trust';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        <Products />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="6283119226089" />
    </div>
  );
}

export default App;
