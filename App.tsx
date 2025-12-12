
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import AIAdvisor from './components/AIAdvisor';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

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
      
      {/* Floating WhatsApp for quick contact */}
      <a 
        href="https://wa.me/96551321125" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-float"
        title="تحدث معنا واتساب"
      >
        <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" className="w-8 h-8" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default App;
