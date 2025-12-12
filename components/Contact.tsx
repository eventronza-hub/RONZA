
import React from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { ADDRESS, CONTACT_NUMBERS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#FFF9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-[#D4AF37] font-display text-xl mb-2">تواصلوا معنا</h3>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-8">نحن في انتظاركم</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-lg">موقعنا</h4>
                  <p className="text-gray-600 leading-relaxed">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-lg">أرقام التواصل</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-2">
                    <p className="text-gray-600">الكوش: {CONTACT_NUMBERS.kosha}</p>
                    <p className="text-gray-600">التصوير: {CONTACT_NUMBERS.photography}</p>
                    <p className="text-gray-600">الدي جي: {CONTACT_NUMBERS.dj}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-lg">أوقات العمل</h4>
                  <p className="text-gray-600">يومياً من الساعة ٤ عصراً حتى ١٠ مساءً</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href={`https://wa.me/965${CONTACT_NUMBERS.kosha}`} 
                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle size={22} />
                تحدثي معنا واتساب
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-4 rounded-3xl shadow-2xl rotate-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m2!1m1!2zMjkzMzc3Mzk!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9cc9d5e9b89b%3A0xe5497292276535d4!2zWmV3YXlhIENlbnRyZQ!5e0!3m2!1sen!2skw!4v1700000000000!5m2!1sen!2skw" 
                width="100%" 
                height="450" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4AF37] rounded-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
