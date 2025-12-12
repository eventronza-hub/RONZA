
import React from 'react';

const Gallery: React.FC = () => {
  const photos = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="text-right">
            <h3 className="text-[#D4AF37] font-display text-xl mb-2">من أعمالنا</h3>
            <h2 className="text-4xl font-display font-bold text-gray-900">معرض الفخامة</h2>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all shadow-xl"
          >
            <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok.png" className="w-6 h-6" alt="TikTok" />
            <span className="font-bold">تابعينا على تيك توك</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((url, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-2xl group cursor-pointer h-64 ${i === 0 ? 'md:col-span-2 md:h-auto' : ''}`}
            >
              <img 
                src={url} 
                alt={`Wedding setup ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">رونزا إيفنت - لمسة فخامة</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
