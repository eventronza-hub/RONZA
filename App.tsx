
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import AIAdvisor from './components/AIAdvisor';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getRotatedWhatsAppNumber } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleFloatingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const rotatedNumber = getRotatedWhatsAppNumber();
    window.open(`https://wa.me/965${rotatedNumber}?text=يا هلا، حاب استفسر عن خدمات رونزا إيفنت`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <AIAdvisor />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp for quick contact with smart rotation */}
      <button 
        onClick={handleFloatingClick}
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-float"
        title="تحدث معنا واتساب (تدوير ذكي)"
      >
        <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" className="w-8 h-8" alt="WhatsApp" />
      </button>
    </div>
  );
};

export default App;
