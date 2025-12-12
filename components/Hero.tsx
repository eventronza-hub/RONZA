
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Wedding" 
          className="w-full h-full object-cover brightness-[0.6]"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6">
        <h2 className="text-[#D4AF37] font-display text-xl sm:text-2xl mb-4 tracking-[0.2em] animate-fadeInUp">
          نصمم ليلتكم لتكون أسطورة
        </h2>
        <h1 className="text-white font-display text-5xl sm:text-7xl md:text-8xl mb-8 animate-fadeInUp delay-100">
          رونزا إيفنت
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fadeInUp delay-200">
          خبراء الكوش والتصوير والدي جي في الكويت. فخامة ملكية تليق بمناسباتكم السعيدة في قلب مجمع زاوية سنتر.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
          <a 
            href="#services" 
            className="bg-[#D4AF37] hover:bg-[#B8860B] text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            اكتشف خدماتنا
          </a>
          <a 
            href="#ai-advisor" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold transition-all"
          >
            استشر مستشارنا الذكي
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden sm:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
