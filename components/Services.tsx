
import React from 'react';
import { SERVICES } from '../constants';
import { ExternalLink } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-[#D4AF37] font-display text-xl mb-2">ماذا نقدم لكم؟</h3>
        <h2 className="text-4xl font-display font-bold text-gray-900 mb-16 relative inline-block">
          خدماتنا الملكية
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#D4AF37]"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-10 bg-[#FFF9FA] rounded-3xl border border-transparent hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#D4AF37]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-gray-800 mb-4 font-display">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <a 
                href={`https://wa.me/965${service.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#D4AF37] font-bold hover:gap-4 transition-all"
              >
                احجز الآن
                <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#FFF0F5] to-[#FFE4E1] p-10 rounded-3xl border-2 border-dashed border-[#D4AF37]/20">
          <p className="text-[#B8860B] font-bold text-xl mb-4">عرض حصري لمتابعي الموقع!</p>
          <p className="text-gray-700 mb-6">خصم 15% على باقة "التصوير + الدي جي" عند الحجز المبكر لشهر رمضان 2025.</p>
          <a href={`https://wa.me/96551321125`} className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">استفد من العرض</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
