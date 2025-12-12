
import React from 'react';
import { PACKAGES } from '../constants';
import { Check } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 bg-[#FFF0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[#D4AF37] font-display text-xl mb-2">اختر ما يناسب حلمك</h3>
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">باقاتنا الملكية</h2>
          <p className="text-gray-600">نقدم خيارات مرنة بجودة استثنائية لتناسب مختلف الميزانيات</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.name} 
              className={`bg-white rounded-3xl overflow-hidden shadow-xl transition-all hover:scale-105 flex flex-col ${pkg.level === 'Gold' ? 'ring-4 ring-[#D4AF37] scale-105 z-10' : ''}`}
            >
              {pkg.level === 'Gold' && (
                <div className="bg-[#D4AF37] text-white text-center py-2 text-sm font-bold uppercase tracking-widest">
                  الأكثر طلباً
                </div>
              )}
              
              <div className="p-8 text-center border-b border-gray-100">
                <h4 className="text-2xl font-bold text-gray-800 font-display mb-2">{pkg.name}</h4>
                <div className="text-[#D4AF37] text-sm font-medium">السعر عند الطلب</div>
              </div>
              
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                      <Check className="text-[#D4AF37] mt-1 shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8">
                <a 
                  href={`https://wa.me/96551321125?text=استفسار عن ${pkg.name}`}
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${pkg.level === 'Gold' ? 'bg-[#D4AF37] text-white shadow-lg' : 'bg-[#FFF0F5] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white'}`}
                >
                  اطلب تسعيرة
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
